// src/pages/DashboardRouter.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardRouter = () => {
  const { currentUser, userRole } = useAuth(); // Make sure userRole is correctly set in context
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else {
      if (userRole === 'buyer') {
        navigate('/buyer/dashboard');
      } else if (userRole === 'seller') {
        navigate('/seller/dashboard'); // Or change this if your seller dashboard path is different
      } else {
        navigate('/');
      }
    }
  }, [currentUser, userRole, navigate]);

  return <p className="text-center mt-10 text-purple-600 font-semibold">Redirecting...</p>;
};

export default DashboardRouter;
