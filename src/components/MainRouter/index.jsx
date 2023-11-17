import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from 'pages/User/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import LoginPage from 'pages/User/LoginPage';
import UserlogPage from 'pages/User/UserlogPage';
import AdminLoginPage from 'pages/Admin/LoginPage';
import AdminMainPage from 'pages/Admin/MainPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/userlog" element={<UserlogPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/*" element={<AdminMainPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
