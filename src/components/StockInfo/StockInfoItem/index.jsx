import React, { useState, useEffect } from "react";
import * as _ from "./style";
import styled from "styled-components";
import { axiosInstance } from "../../../axios";
import PrettyDateTime from "../../../utils/date";
export const StockInfoItem = () => {
  const [stockinfo, setStockInfo] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/admin/inventoryCheck",)
      .then((response) => {
        // console.log(response.data);
        setStockInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  },[]);

  return (
    <InfoWrap>
      {stockinfo && 
      stockinfo.map((item) => (
        // 중요한부분, 키값에 아이템 넣지 말고 고유한 식별자로 사용할 수 있는 값을 지정할 것
        <_.Info key={item.inventory_id}> 
          <_.Infochoose>
            <_.Infotext>{item.inventory_id}</_.Infotext>
          </_.Infochoose>
          <_.Infochooses>
            <_.Infotext>{item.item_name}</_.Infotext>
          </_.Infochooses>
          <_.Infochoose>
            <_.Infotext>{item.quantity}</_.Infotext>
          </_.Infochoose>
          <_.Infochooses>
            <_.Infotext>{PrettyDateTime(item.last_updated)}</_.Infotext>
          </_.Infochooses>
        </_.Info>
      ))}
    </InfoWrap>
  );  
};


const InfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  flex-direction: column;
`;
