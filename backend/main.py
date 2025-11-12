from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv
from pydantic import BaseModel, EmailStr
from typing import Optional
import uuid
import os

# ============================================================
# 1. Load environment variables and connect to Supabase
# ============================================================

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

# Ensure that SERVICE_KEY (not anon key) is used in backend
supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

# ============================================================
# 2. Initialize FastAPI app and configure CORS
# ============================================================

app = FastAPI()

origins = [
    "http://localhost:3000",  # Default Next.js dev port
    "http://localhost:3001",  # Optional secondary port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# ============================================================
# 3. Define Pydantic models for request validation
# ============================================================

class NewUser(BaseModel):
    """Model for new user registration."""
    id: uuid.UUID  # Supabase Auth user ID
    username: str
    name: str
    email: EmailStr


class ProfileUpdate(BaseModel):
    """Model for updating user profile information."""
    name: str
    bio: str
    email: str


class AvatarUpdate(BaseModel):
    """Model for updating user's avatar URL."""
    avatar_url: str


class FavoriteRequest(BaseModel):
    """Model for adding/removing a favorite course."""
    course_id: str


class ProgressRequest(BaseModel):
    """Model for marking lecture completion."""
    lecture_id: uuid.UUID


# ============================================================
# 4. Root endpoint (for connection check)
# ============================================================

@app.get("/")
def root():
    return {"message": "FastAPI connected to Supabase"}


# ============================================================
# 5. Fetch user profile and related data
# ============================================================

@app.get("/profile/{username}")
async def get_user_profile(username: str):
    """Fetch user profile, favorites, progress, and achievements."""

    # 1. Fetch user basic info
    user_query = supabase.table("users").select("*").eq("username", username).execute()
    if not user_query.data:
        raise HTTPException(status_code=404, detail=f"User not found with username: {username}")

    user_data = user_query.data[0]
    user_id = user_data["id"]

    # 2. Fetch related user data
    decorations_query = supabase.table("decorations").select("unlocked, equipped").eq("user_id", user_id).execute()
    favorites_query = supabase.table("favorites").select("course_id").eq("user_id", user_id).order("created_at", desc=False).execute()
    history_query = supabase.table("view_history").select("course_id").eq("user_id", user_id).order("viewed_at", desc=True).limit(10).execute()
    achievements_query = supabase.table("user_achievements").select("*").eq("user_id", user_id).execute()
    progress_query = supabase.table("lecture_progress").select("lecture_id").eq("user_id", user_id).execute()

    # 3. Combine into a single response
    progress_list = [p["lecture_id"] for p in progress_query.data]

    profile_response = {
        "user": user_data,
        "learningTime": user_data.get("learning_time", 0),
        "decorations": decorations_query.data[0] if decorations_query.data else {"unlocked": [], "equipped": None},
        "favorites": [f["course_id"] for f in favorites_query.data],
        "history": [h["course_id"] for h in history_query.data],
        "badges": achievements_query.data,
        "progress": progress_list,
    }

    return profile_response


# ============================================================
# 6. Update user profile info
# ============================================================

@app.patch("/profile/{user_id}")
async def update_user_profile(user_id: str, profile: ProfileUpdate):
    """Update user's name, bio, and email."""

    update_data = {
        "name": profile.name,
        "bio": profile.bio,
        "email": profile.email,
    }

    query = supabase.table("users").update(update_data).eq("id", user_id).execute()

    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to update profile")

    return query.data[0]  # Return updated user data


# ============================================================
# 7. Update user avatar
# ============================================================

@app.patch("/profile/avatar/{user_id}")
async def update_user_avatar(user_id: str, avatar: AvatarUpdate):
    """Update user's avatar URL."""

    query = supabase.table("users").update(avatar.dict()).eq("id", user_id).execute()
    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to update avatar")

    return query.data[0]


# ============================================================
# 8. Get all courses
# ============================================================

@app.get("/courses")
async def get_all_courses():
    """Return all courses from Supabase."""
    query = supabase.table("courses").select("*").execute()

    if not query.data:
        raise HTTPException(status_code=404, detail="No courses found")

    return query.data


# ============================================================
# 9. Manage user favorites
# ============================================================

@app.post("/profile/favorites/{user_id}")
async def add_favorite(user_id: str, favorite: FavoriteRequest):
    """Add a course to user's favorites."""

    data = {
        "user_id": user_id,
        "course_id": favorite.course_id,
    }

    query = supabase.table("favorites").upsert(data).execute()
    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to add favorite")

    return query.data


@app.delete("/profile/favorites/{user_id}/{course_id}")
async def remove_favorite(user_id: str, course_id: str):
    """Remove a course from user's favorites."""

    query = supabase.table("favorites").delete().eq("user_id", user_id).eq("course_id", course_id).execute()
    if not query.data:
        raise HTTPException(status_code=404, detail="Favorite not found or failed to remove")

    return {"message": "Favorite removed"}


# ============================================================
# 10. Manage view history
# ============================================================

@app.post("/profile/history/{user_id}")
async def add_history(user_id: str, favorite: FavoriteRequest):
    """Add or update a course view history record."""

    data = {
        "user_id": user_id,
        "course_id": favorite.course_id,
        "viewed_at": "now()",  # Always update to current timestamp
    }

    # Upsert ensures that if the record exists, it updates viewed_at
    query = supabase.table("view_history").upsert(data, on_conflict="user_id, course_id").execute()
    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to add history")

    return query.data


# ============================================================
# 11. Get all lectures
# ============================================================

@app.get("/lectures")
async def get_all_lectures():
    """Return all lectures from Supabase."""
    query = supabase.table("lectures").select("*").execute()

    if not query.data:
        raise HTTPException(status_code=404, detail="No lectures found")

    return query.data


# ============================================================
# 12. Mark lecture as completed
# ============================================================

@app.post("/progress/complete/{user_id}")
async def mark_lecture_complete(user_id: str, progress: ProgressRequest):
    """Mark a lecture as completed for a user."""

    data = {
        "user_id": user_id,
        "lecture_id": str(progress.lecture_id),  # Convert UUID to string
    }

    query = supabase.table("lecture_progress").upsert(data, on_conflict="user_id, lecture_id").execute()
    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to mark as complete")

    return query.data

# ============================================================
# End of main.py
# ============================================================
