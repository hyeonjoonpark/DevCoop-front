import React, { useEffect, useState } from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import Header from "../Header";
import { StudentinfoItem } from "./StudentinfoItem";
// import { getStudentinfo } from "../../axios";
import data from "./data.json";

const Studentinfo = () => {
  // const [studentinfoList, setStudentinfoList] = useState([]);

  // useEffect(() => {
  //   // API 호출 함수
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await getStudentinfo();
  //       const data = await response.json();
  //       setStudentinfoList(data); // 가져온 데이터를 state에 저장
  //     } catch (error) {
  //       console.log("Error fetching posts:", error);
  //     }
  //   };

  //   // 함수 호출
  //   fetchPosts();
  // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 호출되도록 설정

  console.log(data);

  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />

          <_.InfoContainer>
            <_.InfoHeader>
              <_.Infotitle>학생 정보 조회</_.Infotitle>
              <div>
                <_.Infobutton mRight="10px">일괄선택</_.Infobutton>
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
              {/* {studentinfoList.map((student) => (
                <ul key={student.student_name}>
                  <li>{student.student_name}</li>
                  <li>{student.code_number}</li>
                </ul>
              ))} */}
              <div>
                {data.studentlists.map((student) => (
                  <>
                    <StudentinfoItem student={student} />
                  </>
                ))}
              </div>
            </_.Infolist>
          </_.InfoContainer>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default Studentinfo;
