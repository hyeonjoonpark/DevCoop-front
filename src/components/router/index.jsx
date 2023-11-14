import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "context/authContext";

import MainPage from "pages/User/MainPage"; 
import NotFoundPage from 'pages/NotFoundPage';
import PaymentsPage from 'pages/Admin/Payments';
import BarcodePage from "pages/Admin/BarcodePage";
import LoginPage from 'pages/User/LoginPage';
import UserlogPage from 'pages/User/UserlogPage';
import AdminLoginPage from 'pages/Admin/LoginPage';
import AdminMainPage from "pages/Admin/MainPage";
import ChargeCompletePage from "pages/Admin/ChargeComplete";
import PayCompletePage from "pages/Admin/PayComplete";
import StockInfoPage from "pages/Admin/StockInfoPage";
import StockBarcodPage from "pages/Admin/StockBarcodePage";



const Router = () => {
  const { isAdminLoggedIn } = useAuth();

  
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/userlog" element={<UserlogPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/*" element={isAdminLoggedIn ? <AdminMainPage /> : <Navigate to="/admin/login" />} />
      <Route path="/admin/payments" element={<PaymentsPage />} />
      <Route path="/admin/chargecomplete" element={<ChargeCompletePage />} />
      <Route path="/admin/paycomplete" element={<PayCompletePage />} />
      <Route path="/admin/barcode" element={<BarcodePage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/admin/stockinfo" element={<StockInfoPage />} />
      <Route path="/admin/stockbarcode" element={<StockBarcodPage />} />
    </Routes>
  );
};

export default Router;
