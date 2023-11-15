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
      {/* <Route path="/admin/payments" element={<PaymentsPage />} />
      <Route path="/admin/chargecomplete" element={<ChargeCompletePage />} />
      <Route path="/admin/paycomplete" element={<PayCompletePage />} />
      <Route path="/admin/barcode" element={<BarcodePage />} />
      <Route path="/admin/stockinfo" element={<StockInfoPage />} />
      <Route path="/admin/stockbarcode" element={<StockBarcodPage />} /> */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
