import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from "../Main";
import PaymentsPage from '../../pages/Payments';
import NotFoundPage from '../../pages/NotFoundPage';

const Router = () => {
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/payments" element={<PaymentsPage/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
        </Switch>
    </>
  )
}

export default Router