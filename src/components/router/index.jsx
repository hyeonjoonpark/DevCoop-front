import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import StudentinfoPage from "../../pages/StudentinfoPage";
import NotFoundPage from '../../pages/NotFoundPage';

const Router = () => {
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/studentinfo" element={<StudentinfoPage/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
        </Switch>
    </>
  )
}

export default Router