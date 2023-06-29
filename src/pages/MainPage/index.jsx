import React from "react";
import Main from "../../components/Main";
import LoginPage from "../LoginPage";
import { Link } from "react-router-dom";
import data from "../../components/Studentinfo/data.json";

export default function MainPage() {
  return (
    <>
      {/* <button><Link to="/login">로그인</Link></button> */}
      <Main student={data.studentlists}/>
    </>
  );
}
