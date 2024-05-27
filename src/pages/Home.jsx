import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen w-full bg-gray-900 flex items-center justify-center flex-col'>
      <h1 className='text-white text-6xl'>Home!</h1>
      <button className='bg-blue-500 px-6 py-3 rounded-md mt-4 text-white' 
      onClick={()=> navigate('/login')}
      >Login</button>
    </div>
  )
}

export default Home
