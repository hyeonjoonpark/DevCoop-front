import React, { useEffect, useState } from "react";
import * as _ from "./style";
import * as C from "../ChargeComplete/style";
import {axiosInstance } from "../../axios";

const UsePointLogItem = () => {
  // const handlePoint = () => {
  //   // TODO : 만약 결제를 했다면 isPoint를 false로, 성공했다면 true로 반환하는 함수 로직 작성
  // }

  // const [data, setData] = useState(null);
  // const [] = useState(null);
  // const id = localStorage.getItem("clientbarcode");

  const [data, setData] = useState(null);
  // const [date, setDate] = useState([null]);
  // const [point, setPoint] = useState([null]);
  // const [type, setType] = useState([null]);
  console.log("Check userlog");
  useEffect(() => {
    const clientname = localStorage.getItem("clientname");
    if (clientname) {
      axios
        .get("/useuserlog", {
          params: {
            clientname: clientname,
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  console.log(data);
  return (
    <div style={{ flexDirection: "column" }}>
      {data &&
        data.map((item) => (
          <_.PointLogWrap>
            <div
              key={item}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <C.InfoText key={item}>
                {new Date(item.date).toLocaleDateString()}
              </C.InfoText>
              <C.InfoText key={item}>
                -{item.inner_point.toLocaleString()}원
              </C.InfoText>
              <C.InfoText key={item}>{"결제"}</C.InfoText>
            </div>
          </_.PointLogWrap>
        ))}
    </div>
  );
};

export default UsePointLogItem;
