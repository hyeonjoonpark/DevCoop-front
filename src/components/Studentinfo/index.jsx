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
                    <_.Infotitle style={{marginLeft: "10px"}}>학생 정보 조회</_.Infotitle>
                    <_.Infobutton style={{ marginLeft: "250px", marginRight: "10px" }}>일괄선택</_.Infobutton>
                    <_.Infobutton>일괄충전</_.Infobutton>
                    <_.Infoline style={{marginTop: "20px"}}/>
                </_.InfoHeader>
                <_.Infolist>
                    <_.Infotext color='8A8A8A'>선택</_.Infotext>
                    <_.Infotext>학번</_.Infotext>
                    <_.Infotext>이름</_.Infotext>
                    <_.Infotext>바코드번호</_.Infotext>
                    <_.Infotext>관리자</_.Infotext>
                    <_.Infoline style={{marginTop: "20px"}}/>
                    <_.Infodata>
                        <_.Inforadiobutton><input type='radio'/></_.Inforadiobutton>
                        <_.Infodatatext>2206</_.Infodatatext>
                        <_.Infodatatext>김알이</_.Infodatatext>
                        <_.Infodatatext>000</_.Infodatatext>
                        <_.Infodatatext>관리자</_.Infodatatext>
                    </_.Infodata>
                </_.Infolist>
            </_.InfoContainer>
        </P.PageContainer>
    </P.PageWrap>
    </>
  )
}

export default Studentinfo