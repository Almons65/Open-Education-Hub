"use client"
// Import React's useEffect hook for handling side effects
import {useEffect} from "react";
// Import the Supabase client
import {supabase} from "@/lib/supabaseClient";
// Import Next.js's router hook for navigation
import {useRouter} from "next/navigation";

/**
 * AuthCallback component
 * This page handles the redirect back from an OAuth provider (like Google or GitHub).
 * It checks if a session was successfully created and redirects the user accordingly.
 */
export default function AuthCallback(){
    // Get the router instance to perform redirections
    const router = useRouter();

    // Run this effect once when the component mounts
    useEffect(()=>{
        /**
         * Checks the current Supabase auth session.
         * If a session exists (meaning OAuth login was successful), redirect to '/home'.
         * If no session exists (login failed or was cancelled), redirect back to '/auth'.
         */
        const checkSession = async ()=>{
            // Retrieve the current session data from Supabase
            const {data} = await supabase.auth.getSession();

            if(data.session) {
                // User is successfully authenticated
                router.push("/home"); // Redirect to the main application page
            } else {
                // Authentication failed or was not completed
                router.push("/auth"); // Send user back to the login page
            }
        };

        // Call the function to check the session
        checkSession();
    },[router]); // Dependency array includes 'router' as it's used inside the effect

    // Display a simple message while the redirect is in progress
    return <p>Redirecting...</p>;
}