import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../../pages/MainPage"; 
import PaymentsPage from '../../pages/Payments';
import NotFoundPage from '../../pages/NotFoundPage';
import BarcodePage from "../../pages/BarcodePage";
import LoginPage from '../../pages/LoginPage';
import UserlogPage from '../../pages/UserlogPage';
import AdminLoginPage from '../../pages/AdminLoginPage';
import AdminMainPage from "../../pages/AdminMainPage";
import ChargeCompletePage from "../../pages/ChargeComplete";
import PayCompletePage from "../../pages/PayComplete";

const Router = () => {
  return (
    <>
      <Switch>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/admin/payments" element={<PaymentsPage/>}/>
          <Route path="/admin/chargecomplete" element={<ChargeCompletePage/>}/>
          <Route path="/admin/paycomplete" element={<PayCompletePage/>}/>
          <Route path="/admin/barcode" element={<BarcodePage />} />
          <Route path="/admin/login" element={<AdminLoginPage/>} />
          <Route path="/admin" element={<AdminMainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/userlog" element={<UserlogPage/>}/>
          <Route path="/*" element={<NotFoundPage />} />
        
      </Switch>

    </>
  );
};

export default Router;
