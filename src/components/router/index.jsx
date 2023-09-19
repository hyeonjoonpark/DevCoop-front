import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../Main"; 
import PaymentsPage from '../../pages/Payments';
import NotFoundPage from '../../pages/NotFoundPage';
import BarcodePage from "../../pages/BarcodePage";
import LoginPage from '../../pages/LoginPage';
import UserlogPage from '../../pages/UserlogPage';
import AdminLoginPage from '../../pages/AdminLoginPage';
import StudentinfoPage from "../../pages/StudentinfoPage";
import ChargeCompletePage from "../../pages/ChargeComplete";
import PayCompletePage from "../../pages/PayComplete";

const Router = () => {
  return (
    <>
      <Switch>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/payments" element={<PaymentsPage/>}/>
          <Route path="/chargecomplete" element={<ChargeCompletePage/>}/>
          <Route path="/paycomplete" element={<PayCompletePage/>}/>
          <Route path="/barcode" element={<BarcodePage />} />
          <Route path="/studentinfo" element={<StudentinfoPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/userlog" element={<UserlogPage/>}/>
          <Route path="/admin" element={<AdminLoginPage/>} />
          <Route path="/*" element={<NotFoundPage />} />
        
      </Switch>

    </>
  );
};

export default Router;
