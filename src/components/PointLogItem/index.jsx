import React, { useEffect, useState } from "react";
import * as _ from "./style";
import * as C from "../ChargeComplete/style";
import { axiosInstance } from "../../axios";

const PointLogItem = ({type}) => {

  const Type = type == 1 ? "충전" : "사용" 
  const background = type == 1 ? "#E6EBFF" : "#EFF0F2" 
  const [data, setData] = useState(null);

  useEffect(() => {
    const clientbarcode = localStorage.getItem("clientbarcode");
    if (clientbarcode) {
      axiosInstance
        .get("/userlog", {
          params: {
            type: type,
            clientbarcode: clientbarcode,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  // console.log(data);
  return (
    <div style={{ flexDirection: "column" }}>
      {data &&
        data.map((item) => (
          <_.PointLogWrap key={item.id} style={{ background: background }}>
            <div style={{ display: "flex"}}>
              <C.InfoText>
                <_.DateText>
                  {new Date(item.date).toLocaleDateString()}
                </_.DateText>
                <_.AmountText>
                  {item.inner_point.toLocaleString()}원 {Type}
                </_.AmountText>
              </C.InfoText>
            </div>
          </_.PointLogWrap>
        ))}
    </div>
  );
}

export default PointLogItem;
