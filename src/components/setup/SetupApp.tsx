import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const SetupApp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const currentPath = location.pathname;
        if (error.response && error.response.status === 401 && currentPath !== '/login') {
          console.log('thrown out of auth');
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, location.pathname]);

  return null;
};

export default SetupApp;
