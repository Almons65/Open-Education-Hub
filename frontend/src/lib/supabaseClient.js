// import { createClient } from '@supabase/supabase-js'

// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
// const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
//   // Helpful dev-time warning (won't break production build, but will show missing config)
//   // Replace with `throw` if you prefer failing fast in development.
//   console.warn('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Check your .env.local or environment.')
// }

// // Only create the client when both env vars are present. Creating with empty strings
// // causes the Supabase constructor to throw during module evaluation, which breaks
// // server-side rendering and causes a 500. By lazily guarding creation we avoid that.
// let supabase = null
// if (SUPABASE_URL && SUPABASE_ANON_KEY) {
//   supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
// } else {
//   // Keep supabase as null so imports succeed; components should handle null or
//   // call `getSupabaseOrThrow()` to fail loudly with a helpful message.
// }

// export { supabase }

// export function getSupabaseOrThrow() {
//   if (!supabase) {
//     throw new Error(
//       'Supabase client is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to frontend/.env.local and restart the dev server.'
//     )
//   }
//   return supabase
// }


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