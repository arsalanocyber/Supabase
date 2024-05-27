import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
  "https://zfdpsguksalovukmfbcw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZHBzZ3Vrc2Fsb3Z1a21mYmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDU3OTUsImV4cCI6MjAzMjM4MTc5NX0.O9AGEqxziF9ahg4mQx7S2sA3f1UuO1mWeH-x-EQwm-g"
)

const Login = () => {

    const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/success');
      } else if (event === 'SIGNED_OUT') {
        navigate('/');
      }
    });

  }, [navigate]);

  return (
    <div className='flex justify-center items-center bg-gray-900 h-screen'>
      <div className='w-full max-w-md'>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
        />
      </div>
    </div>
  )
}

export default Login
