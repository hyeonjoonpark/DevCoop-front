import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import ManyChargeComponent from 'components/Admin/Transaction/ManyCharge';
import PaymentsComponent from 'components/Admin/Transaction/Payments';
import BarcodeComponent from 'components/Admin/Transaction/Barcode';
import ChargeCompleteComponent from 'components/Admin/Transaction/ChargeComplete';
import PayCompleteComponent from 'components/Admin/Transaction/PayComplete';

import ChargeListComponent from 'components/Admin/PointManage/ChargeList';
import PayListComponent from 'components/Admin/PointManage/PayList';

import UserListComponent from 'components/Admin/Auth/UserList';

import StockVarianceComponent from 'components/Admin/Inventory/StockVariance';
import StockBarcodeComponent from 'components/Admin/Inventory/StockBarcode';
import ItemInfoComponent from 'components/Admin/Inventory/ItemInfo';
import InventoryCheckComponent from 'components/Admin/Inventory/InventoryCheck';
import InventoryByDayComponent from 'components/Admin/Inventory/InventoryByDay';
import ReceityCheckComponent from 'components/Admin/Inventory/ReceiptCheck';
import PrepairPage from 'pages/Admin/Preparing';
import NotFoundPage from 'pages/NotFoundPage';

const AdminRoutes = () => {
  const { isAdminLoggedIn } = useAuth();

  return isAdminLoggedIn ? (
    <Routes>
      <Route path="/" element={<BarcodeComponent />} />
      <Route path="manycharge" element={<ManyChargeComponent />} />
      <Route path="payments" element={<PaymentsComponent />} />
      <Route path="chargecomplete" element={<ChargeCompleteComponent />} />
      <Route path="paycomplete" element={<PayCompleteComponent />} />
      <Route path="barcode" element={<BarcodeComponent />} />
      <Route path="userlist" element={<UserListComponent />} />
      <Route path="stockvariance" element={<StockVarianceComponent />} />
      <Route path="stockbarcode" element={<StockBarcodeComponent />} />
      <Route path="item" element={<ItemInfoComponent />} />
      <Route path="inventory" element={<InventoryCheckComponent />} />
      <Route path="inventorybyday" element={<InventoryByDayComponent />} />
      <Route path="receipt" element={<ReceityCheckComponent />} />
      <Route path="chargelist" element={<ChargeListComponent />} />
      <Route path="paylist" element={<PayListComponent />} />
      <Route path="preparing" element={<PrepairPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default AdminRoutes;
