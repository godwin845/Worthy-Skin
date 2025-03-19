// src/components/Auth/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { login } from '../../redux/auth'; // Import login action

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // To store error messages

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a login process (replace with actual API request)
    if (email === 'user@example.com' && password === '123') {
      // Dispatch login action with user data (replace with actual user data)
      dispatch(login({ email, name: 'John Doe' }));

      // Navigate to user page after successful login
      navigate('/user');
    } else {
      // If login fails, show error message
      setErrorMessage('Invalid email or password');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-amber-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="animate__animated animate__fadeInRight bg-white rounded-4xl p-8 w-[320px] max-w-[400px] relative">
        <button
          onClick={closeModal}
          className="animate__animated animate__animated absolute top-2 right-2 text-gray-600 text-xl"
        >
          &times;
        </button>
        <h1 className="text-center text-black text-[25px] font-bold font-['Merriweather_Sans']">Login</h1>

        {/* Display error message if any */}
        {errorMessage && (
          <div className="text-red-500 text-center mt-2">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mt-5 w-full h-[43px] relative rounded-[30px] outline outline-offset-[-1px] outline-[#1e1e1e] overflow-hidden">
            <input
              type="email"
              className="w-full h-full pl-[20px] pr-[10px] text-[#3e3535] text-[13px] font-normal font-['Merriweather_Sans'] outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-5 w-full h-[43px] relative rounded-[30px] outline outline-offset-[-1px] outline-black overflow-hidden">
            <input
              type="password"
              className="w-full h-full pl-[20px] pr-[10px] text-[#3e3535] text-[13px] font-normal font-['Merriweather_Sans'] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-5 justify-start text-[#1e1e1e] text-xs font-normal font-['Merriweather_Sans']">
            Forgot Password?
          </div>

          <div className="mt-5 text-center w-full h-[43px] relative bg-[#f7a672] rounded-[35px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#918686]">
            <button type="submit" className="w-full h-full">Login</button>
          </div>
        </form>

        <div className="flex justify-center mt-5">
          <div className="text-black text-xs font-normal font-['Merriweather_Sans']">Don’t have an account?</div>
          <Link to='/register' className="text-black text-xs font-extrabold font-['Merriweather_Sans'] ml-2 cursor-pointer">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;