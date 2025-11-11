from fastapi import FastAPI, HTTPException
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware # Import CORS
import uuid
from pydantic import BaseModel, EmailStr
from pydantic import BaseModel
from typing import Optional

# Load environment variables (SUPABASE_URL, SUPABASE_SERVICE_KEY)
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

# Make sure you are using the SERVICE_KEY on the backend
supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

app = FastAPI()

origins = [
    "http://localhost:3000", # The Next.js default port
    "http://localhost:3001"  # The Next.js second port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods
    allow_headers=["*"], # Allows all headers
)
# ---------------------------------

# ---------------------------------
# --- 3. 新規ユーザー用Pydanticモデル ---
# React (AuthPage.jsx) から送信されるJSONの形式を定義
# ---------------------------------
class NewUser(BaseModel):
    id: uuid.UUID  # SupabaseのAuthから取得したID
    username: str
    name: str
    email: EmailStr
# ---------------------------------

@app.get("/")
def root():
    return {"message": "FastAPI connected to Supabase"}

@app.get("/profile/{username}")
async def get_user_profile(username: str):
    
    # 1. Get the user's main profile info
    # This query now ALSO gets the learning_time column
    user_query = supabase.table("users").select("*").eq("username", username).execute()
    
    if not user_query.data:
        raise HTTPException(status_code=404, detail=f"User not found with username: {username}")
        
    user_data = user_query.data[0] 
    user_id = user_data["id"] 

    # 2. Get all other data related to this user in parallel
    
    # --- THIS QUERY IS NOW DELETED ---
    # time_query = supabase.table("learning_time")...
    
    decorations_query = supabase.table("decorations").select("unlocked, equipped").eq("user_id", user_id).execute()
    favorites_query = supabase.table("favorites") \
        .select("course_id") \
        .eq("user_id", user_id) \
        .order("created_at", desc=False) \
        .execute()
    history_query = supabase.table("view_history").select("course_id").eq("user_id", user_id).order("viewed_at", desc=True).limit(10).execute()
    achievements_query = supabase.table("user_achievements").select("*").eq("user_id", user_id).execute()
    progress_query = supabase.table("course_progress").select("course_id, completed_lectures").eq("user_id", user_id).execute()
    
    # 3. Combine it all into one response
    
    progress_dict = {p["course_id"]: p["completed_lectures"] for p in progress_query.data}

    profile_response = {
        "user": user_data,
        
        # It gets 'learning_time' from user_data, with a fallback of 0
        "learningTime": user_data.get("learning_time", 0), 
        
        "decorations": decorations_query.data[0] if decorations_query.data else {"unlocked": [], "equipped": None},
        "favorites": [f["course_id"] for f in favorites_query.data],
        "history": [h["course_id"] for h in history_query.data],
        "badges": achievements_query.data,
        "progress": progress_dict
    }
    
    return profile_response


from pydantic import BaseModel

# Define what data the frontend can send to change
class ProfileUpdate(BaseModel):
    name: str
    bio: str
    email: str

@app.patch("/profile/{user_id}")
async def update_user_profile(user_id: str, profile: ProfileUpdate):
    
    update_data = {
        "name": profile.name,
        "bio": profile.bio,
        "email": profile.email
    }
    
    # Run the update query on the 'users' table
    query = supabase.table("users").update(update_data).eq("id", user_id).execute()
    
    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to update profile")
        
    return query.data[0] # Return the updated user data
# End of backend/main.py

class AvatarUpdate(BaseModel):
    avatar_url: str

@app.patch("/profile/avatar/{user_id}")
async def update_user_avatar(user_id: str, avatar: AvatarUpdate):
    """
    Updates a user's 'avatar_url' in the 'users' table.
    """
    query = supabase.table("users").update(avatar.dict()).eq("id", user_id).execute()

    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to update avatar")
    return query.data[0] # Return the newly updated user row

# ... (at the end of your main.py file)

@app.get("/courses")
async def get_all_courses():
    """
    Gets the complete list of all courses.
    """
    query = supabase.table("courses").select("*").execute()
    
    if not query.data:
        raise HTTPException(status_code=404, detail="No courses found")
        
    return query.data


# new
class FavoriteRequest(BaseModel):
    course_id: str

@app.post("/profile/favorites/{user_id}")
async def add_favorite(user_id: str, favorite: FavoriteRequest):
    """
    Adds a course to a user's favorites.
    """
    data = {
        "user_id": user_id,
        "course_id": favorite.course_id,
    }
    # Use 'upsert' to prevent errors if the favorite already exists
    query = supabase.table("favorites").upsert(data).execute()

    if not query.data:
        raise HTTPException(status_code=400, detail="Failed to add favorite")
    return query.data

@app.delete("/profile/favorites/{user_id}/{course_id}")
async def remove_favorite(user_id: str, course_id: str):
    """
    Removes a course from a user's favorites.
    """
    query = supabase.table("favorites") \
        .delete() \
        .eq("user_id", user_id) \
        .eq("course_id", course_id) \
        .execute()

    if not query.data:
        raise HTTPException(status_code=404, detail="Favorite not found or failed to remove")
    return {"message": "Favorite removed"}