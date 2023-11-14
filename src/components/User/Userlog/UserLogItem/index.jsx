import React, { useEffect, useState } from "react";
import * as _ from "./style";
import { axiosInstance } from "utils/Axios";

const PointLogItem = ({ type }) => {
  const Type = type === 1 ? "충전" : "사용";
  const background = type === 1 ? "#E6EBFF" : "#EFF0F2";
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/userlog", {
        params: {
          type: type,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(data);
return (
  <div style={{ flexDirection: "column" }}>
    {data &&
      data.map((item, index) => (
        <_.PointLogWrap
          key={`${type}-${index}`}
          style={{ background: background }}
        >
          <_.DateText>{new Date(item.date).toLocaleDateString()}</_.DateText>
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <_.AmountText>
              {`${parseInt(item.inner_point).toLocaleString()}원 ${Type}`}
            </_.AmountText>
          </div>
        </_.PointLogWrap>
      ))}
  </div>
);
};

export default PointLogItem;
