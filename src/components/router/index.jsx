import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import StudentinfoPage from "../../pages/StudentinfoPage";
import NotFoundPage from '../../pages/NotFoundPage';
import LoginPage from '../../pages/LoginPage';
import UserlogPage from '../../pages/UserlogPage';

const Router = () => {
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path="/studentinfo" element={<StudentinfoPage/>}/>
            <Route path="/userlog" element={<UserlogPage/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
        </Switch>
    </>
  )
}

export default Router