"use client"
import {useEffect} from "react";
import {supabase} from "@/lib/supabaseClient";
import {useRouter} from "next/navigation";

export default function AuthCallback(){
    const router = useRouter();

    useEffect(()=>{
        const checkSession = async ()=>{
            const {data} = await supabase.auth.getSession();
            if(data.session) router.push("/home");
            else router.push("/auth");
        };
        checkSession();
    },[router]);
    return <p>Redirecting...</p>;
}