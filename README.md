# Open_Education_Hub

## Contributors
**Frontend -** Almons

**Backend and Database -** Haru and Pluem

## Project Description
The Open Education Hub is an online platform designed to provide a centralized space where students can access educational resources regardless of their physical location. The project aims to facilitate self-paced learning by integrating recorded lecture videos and class materials into a structured system.

The platform operates on a collaborative model between lecturers and developers:

  - **Content Delivery**: Lecturers prepare clips and documents.

  - **Content Management**: Developers organize, upload, and publish these materials to ensure consistent structure and quality.

  - **Goal**: The initiative combines accessibility and organization to provide equal learning opportunities for students while offering lecturers a reliable environment to share their skills.

## Key Features
The application is divided into several core functional areas designed to gamify the learning experience and manage user progress.

**1. User Access & Profile Management**

  - **Authentication**: The system includes a secure login and registration system supporting email/password and OAuth (Google, GitHub). It also features password reset functionality.

  - **Profile Customization**: Users can edit their profiles, upload avatars, and view their "Member Since" status .

  - **Decoration System**: Users can equip avatar decorations (wreaths) earned through the ranking system.

**2. Course Discovery & Learning**

  - **Search & Filter**: Learners can find courses using a search bar or filter by difficulty (Beginner, Intermediate, Advanced) and subject (e.g., Python, AI, Physics).

  - **Lecture Playback**: The course interface includes a video player for lectures and downloadable course materials.

  - **Progress Tracking**: The system tracks viewing history and calculates completion percentages for each course.

  - **Time Tracking**: An automated timer tracks the exact amount of time a student spends watching lectures to update their total learning time.

**3. Gamification & Achievements**

  - **Badges**: Students earn specific course badges upon completing 100% of a course.

  - **Ranking System**: A leaderboard ranks users based on their total learning time.

  - **Rewards**: The top 3 students on the leaderboard receive Gold, Silver, or Bronze medal badges and exclusive avatar decorations.

## Technical Highlights
The project utilizes a modern tech stack separating the frontend and backend logic, with dedicated solutions for media management.

**1. Frontend Frameworks**

- **Next.js & React**: Used for the main UI components, page state management, and routing .

- **ClientGate Component**: A custom wrapper used to prevent hydration mismatch errors by ensuring specific children only render after the client has fully hydrated .

- **Framer Motion**: Implemented for page transition animations and UI effects (e.g., fading elements, sliding sidebars).

- **CSS Modules**: Used for locally scoped styling to prevent class name conflicts.

**2. Backend & Database**

  - **FastAPI (Python)**: Serves as the backend API to handle requests for user profiles, course data, and progress updates .

  - **Supabase (PostgreSQL)**:

    - **Auth**: Manages user sessions and OAuth integration .

    - **Database**: Stores relational data including users, courses, lecture_progress, reviews, and user_rankings .

    - **RPC Functions**: Uses Remote Procedure Calls (e.g., increment_learning_time) to safely update user stats on the server side .

**3. Infrastructure & Storage**

**Cloudinary**: Integrated for robust media storage and management. It is used to host large files such as MP4 lecture videos, PDF documents, PPTX slides, and JPG images (such as avatars), ensuring efficient delivery of course content.

**4. Data Logic**

  - **Real-time Updates**: The frontend uses useEffect hooks to listen for custom events like historyUpdated or favoritesUpdated to refresh data without full page reloads .

  - **Optimistic UI**: The application calculates progress locally using API data to provide immediate feedback to the user .







## Authentication Page 


<img width="900" height="467" alt="image" src="https://github.com/user-attachments/assets/658e849e-7792-4860-809f-855af66b3897" />





## Home Page


<img width="902" height="463" alt="image" src="https://github.com/user-attachments/assets/00fdd41d-c1c3-4f1a-a76f-35f24b753df7" />





## Course Preview Page


<img width="900" height="466" alt="image" src="https://github.com/user-attachments/assets/a7c921ae-d5d0-4d29-b199-e01d4656e7f1" />





## Lecture Page


<img width="898" height="467" alt="image" src="https://github.com/user-attachments/assets/4c6545cb-5e6c-4dc4-b344-7761dc0f74ae" />





## Profile Page


<img width="901" height="467" alt="image" src="https://github.com/user-attachments/assets/83f1cb69-c1c2-4ac3-8b6d-b1ebe63d1560" />





## Ranking Page


<img width="904" height="469" alt="image" src="https://github.com/user-attachments/assets/2d2896b4-a207-4f4f-b3a6-1a628fbd758f" />
