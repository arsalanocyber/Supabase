import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zfdpsguksalovukmfbcw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZHBzZ3Vrc2Fsb3Z1a21mYmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDU3OTUsImV4cCI6MjAzMjM4MTc5NX0.O9AGEqxziF9ahg4mQx7S2sA3f1UuO1mWeH-x-EQwm-g";



export const supabase = createClient(supabaseUrl, supabaseAnonKey);