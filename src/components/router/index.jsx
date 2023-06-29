import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../Main"; 
import PaymentsPage from '../../pages/Payments';
import NotFoundPage from '../../pages/NotFoundPage';
import CompeletePage from '../../pages/Compelete';
import BarcodePage from "../../pages/BarcodePage";

const Router = () => {
  return (
    <>
      <Switch>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/payments" element={<PaymentsPage/>}/>
          <Route path="/compelete" element={<CompeletePage/>}/>
          <Route path="/barcode" element={<BarcodePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>

    </>
  );
};

export default Router;
