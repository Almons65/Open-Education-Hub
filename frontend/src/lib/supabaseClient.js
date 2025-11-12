import { createClient } from '@supabase/supabase-js'

// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_URL = "https://loaudxsjzcdguxgcnlwt.supabase.co"

// const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvYXVkeHNqemNkZ3V4Z2NubHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzOTkzOTIsImV4cCI6MjA3Nzk3NTM5Mn0.LtoN09mO3naF4Q7nZsNhCaVmKbPKPJA7WlmeRaAJcLY"

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Helpful dev-time warning (won't break production build, but will show missing config)
  // Replace with throw if you prefer failing fast in development.
  console.warn('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Check your .env.local or environment.')
}

export const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '')