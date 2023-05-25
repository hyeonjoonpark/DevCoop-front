import React from 'react'
import * as _ from "./style"
import * as P from "../../common/PageWrapStyle"
import Header from '../Header'

const Studentinfo = () => {
  return (
    <>
    <P.PageWrap>
        <P.PageContainer>
            <Header />
            <_.InfoContainer>
                <_.InfoHeader>
                    <_.Infotitle>학생충전페이지</_.Infotitle>
                </_.InfoHeader>
                <_.Infolist>

                </_.Infolist>
            </_.InfoContainer>
        </P.PageContainer>
    </P.PageWrap>
    </>
  )
}

export default Studentinfo