import CourseDetail from "../components/CourseDetail.jsx"; // Import the client component to display details
import { supabase } from "@/lib/supabaseClient"; // Import the Supabase client for database access

/**
 * CoursePage (Server Component)
 * This page fetches data for a single course on the server
 * based on the 'id' parameter from the URL.
 */
// Make the component asynchronous to use 'await' for data fetching
export default async function CoursePage({ params }) {
    // Get the 'id' from the URL parameters (e.g., /courses/[id])
    const { id: courseId } = await params; // Destructure and rename 'id' to 'courseId'

    // Fetch a single course from Supabase
    const { data: course, error } = await supabase
        .from("courses") // From the 'courses' table
        .select("*")     // Select all columns
        .eq("id", courseId) // Where the 'id' column matches our 'courseId'
        .single(); // Expect only one row (or null)

    // Error handling: If data fetching failed or no course was found
    if (error || !course) {
        console.error("Error fetching course:", error);
        // Display an error message to the user
        return <p style={{ padding: "2rem" }}>Course not found.</p>;
    }

    // If successful, render the page
    return (
        <div style={{ padding: "2rem" }}>
            {/*
          Pass the fetched server-side data (course) as a prop
          to the Client Component (CourseDetail).
        */}
            <CourseDetail course={course} />
        </div>
    );
}