import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import StudentInfoComponent from 'components/Admin/StudentInfo';
import PaymentsPage from 'pages/Admin/Payments';
import BarcodePage from 'pages/Admin/BarcodePage';
import ChargeCompletePage from 'pages/Admin/ChargeComplete';
import PayCompletePage from 'pages/Admin/PayComplete';
import StockInfoPage from 'pages/Admin/StockInfoPage';
import StockBarcodePage from 'pages/Admin/StockBarcodePage';

const AdminRoutes = () => {
  const { isAdminLoggedIn } = useAuth();

  return isAdminLoggedIn ? (
    <Routes>
      <Route path="/" element={<StudentInfoComponent />} />
      <Route path="payments" element={<PaymentsPage />} />
      <Route path="chargecomplete" element={<ChargeCompletePage />} />
      <Route path="paycomplete" element={<PayCompletePage />} />
      <Route path="barcode" element={<BarcodePage />} />
      <Route path="stockinfo" element={<StockInfoPage />} />
      <Route path="stockbarcode" element={<StockBarcodePage />} />
      {/* 다른 어드민 라우트들... */}
    </Routes>
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default AdminRoutes;
