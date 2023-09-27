import React from 'react'
import AdminMain from '../../components/AdminMain'
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";



export default function AdminMainPage() {
  const { isLoggedIn } = useAdminAuth();
  const navigate = useNavigate();
  console.log(isLoggedIn)
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/admin/login'); // 어드민 기능 이용시 어드민 로그인 상태 체크
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <>
    <AdminMain/>
    </>
  )
}
