import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../Main";
import BarcodePage from "../../pages/BarcodePage";
import NotFoundPage from "../../pages/NotFoundPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/barcode" element={<BarcodePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Switch>
    </>
  );
};

export default Router;
