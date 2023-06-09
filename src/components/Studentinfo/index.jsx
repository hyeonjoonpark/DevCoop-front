import React from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import Header from "../Header";
import * as InfoList from "./infolist";

const dummyList = [
  {
    id: 1,
    class: 2409,
    name: "김알이",
    nummber: 2022027,
    dir: "관리자",
  },
  {
    id: 2,
    class: 2409,
    name: "김알이",
    nummber: 2022027,
    dir: "학생",
  },
  {
    id: 3,
    class: 2409,
    name: "김알이",
    nummber: 2022027,
    dir: "관리자",
  },
];

const Studentinfo = () => {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          
          <_.InfoContainer>
            <_.InfoHeader>
              <_.Infotitle>학생 정보 조회</_.Infotitle>
              <div>
                <_.Infobutton mRight="10px" >
                  일괄선택
                </_.Infobutton>
                <_.Infobutton>일괄충전</_.Infobutton>
              </div>
            </_.InfoHeader>

            <_.Infolist>
              <_.Info>
                <_.Infochoose>
                  <_.Infotext>선택</_.Infotext>
                </_.Infochoose>
                <_.Infochoose>
                  <_.Infotext>학번</_.Infotext>
                </_.Infochoose>
                <_.Infochoose>
                  <_.Infotext>이름</_.Infotext>
                </_.Infochoose>
                <_.Infochoose>
                  <_.Infotext>바코드번호</_.Infotext>
                </_.Infochoose>
              </_.Info>

              {/* <InfoList infolist={dummyList}/> */}
            </_.Infolist>
          </_.InfoContainer>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default Studentinfo;
