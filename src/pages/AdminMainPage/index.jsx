import React from 'react'
import AdminMain from '../../components/AdminMain'
import { useAuth } from "../../context/authContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";



export default function AdminMainPage() {
  const { isAdminLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate('/admin/login'); // 어드민 로그인 페이지로 리다이렉트
    }
  }, [isAdminLoggedIn, navigate]);
  
  return (
    <>
    <AdminMain/>
    </>
  )
}
