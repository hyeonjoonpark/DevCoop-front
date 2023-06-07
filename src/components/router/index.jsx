import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from "../Main";
import NotFoundPage from '../../pages/NotFoundPage';
import LoginPage from '../../pages/LoginPage';

const Router = () => {
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/Login' element={<LoginPage/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
            
        </Switch>
    </>
  )
}

export default Router