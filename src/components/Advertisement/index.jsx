import React from 'react'
import * as _ from "./style"
import { useNavigate } from 'react-router-dom'

export default function Advertisement() {
    const navigate = useNavigate();
  return (
    <_.AdvertiseWrap onClick={() => {
      navigate("/congrate");
    }}>
        <div><h1>경 ⭑ 축</h1></div>
        <div><p>BSSM 1기</p></div>
        <div><p>심미진 SQI소프트 합격</p></div>
    </_.AdvertiseWrap>
  )
}
