import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };
    
  return (
    <div className='bg-[#e99662] h-screen'>
        <button onClick={handleLogout} className='bg-red-500 w-30 text-white p-3 rounded-xl mt-30 ml-5'>Logout</button>
        <h1 className='text-4xl mt-10 text-center'>Welcome to user dashboard</h1>

        
    </div>
  )
}

export default User;