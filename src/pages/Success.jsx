import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const supabase = createClient(
    "https://zfdpsguksalovukmfbcw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZHBzZ3Vrc2Fsb3Z1a21mYmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDU3OTUsImV4cCI6MjAzMjM4MTc5NX0.O9AGEqxziF9ahg4mQx7S2sA3f1UuO1mWeH-x-EQwm-g"
  )

const Success = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getUserData = async () => {
          const { data, error } = await supabase.auth.getUser();
          if (error) {
            console.error('Error fetching user:', error);
            return;
          }
          if (data?.user) {
            setUser(data.user);
          }
        };
        getUserData();
      }, []);

      console.log(user);


      const logoutUser = async () => {
        const {error} = await supabase.auth.signOut();
        console.log(error);
        navigate('/login');
      }

  return (
    <div className='h-screen w-full bg-gray-900 flex items-center justify-center flex-col'>
      <h1 className='text-white text-6xl'>O Wow! Success</h1>
      <button className='bg-red-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-red-600' 
      onClick={() => logoutUser()}
      >Logout</button>
    </div>
  )
}

export default Success
