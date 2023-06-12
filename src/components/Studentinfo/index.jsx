import React from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import Header from "../Header";
import { StudentinfoItem } from "./StudentinfoItem";
// import * as InfoList from "./infolist"
// import axios from 'axios'
// import { json } from 'react-router-dom'

// const dummyList = [
//   {
//     id: 1,
//     class: 2409,
//     name: "김알이",
//     nummber: 2022027,
//     dir: "관리자",
//   },
//   {
//     id: 2,
//     class: 2409,
//     name: "김알이",
//     nummber: 2022027,
//     dir: "학생",
//   },
//   {
//     id: 3,
//     class: 2409,
//     name: "김알이",
//     nummber: 2022027,
//     dir: "관리자",
//   },
// ];

// async function getData() {
//   try {
//     //응답 성공
//     const response = await axios.get('http://10.129.57.252:6002/api/studentinfo',{
//       params:{
//         //url 뒤에 붙는 param id값
//         id: 12345
//       }
//     });
//     console.log(response);
//   } catch (error) {
//     //응답 실패
//     console.error(error);
//   }
// }

const Studentinfo = () => {
  //     const [data, setData] = useState(false);
  //     useEffect(() => {
  //         const fetchData = async () => {
  //           try {
  //             const response = await fetch('http://10.129.57.252:6002/api/studentinfo');
  //             const jsonData = await response.json(); // 응답을 JSON 형식으로 변환
  //             setData(jsonData); // 응답 데이터를 상태로 설정
  //           } catch (error) {
  //             console.error('Error fetching data:', error);
  //           }
  //         };

  //         fetchData(); // 데이터 요청 함수 실행

  //         // 필요에 따라 정리(clean-up) 함수를 반환하여 컴포넌트가 언마운트될 때 이펙트를 정리할 수 있습니다.
  //         // 예를 들어, 타이머나 이벤트 리스너를 제거하는 등의 작업을 수행할 수 있습니다.
  //         // return () => {
  //         //   cleanup logic…
  //         // };
  //       }, []); // 종속성 배열에 빈 배열([])을 전달하여 마운트 시에만 실행되도록 설정

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
              <StudentinfoItem />
            </_.Infolist>
          </_.InfoContainer>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default Studentinfo;
