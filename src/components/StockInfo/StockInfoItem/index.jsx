import React, { useState, useEffect } from "react";
import * as _ from "./style";
import styled from "styled-components";
import { axiosInstance } from "../../../axios";
import PrettyDateTime from "../../../utils/date";
import axios from "axios";

export const StockInfoItem = ({startDate, endDate}) => {
  const [stockinfo, setStockInfo] = useState([]);
  console.log("startDate:", startDate);
  console.log("endDate:", endDate);

  useEffect(() => {
    axiosInstance
      .get("/admin/inventoryCheck")
      .then((response) => {
        // console.log(response.data);
        setStockInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
return (
    <InfoWrap>
      {stockinfo && 
      stockinfo.map((item) => (
        <_.Info key={item.inventory_id}> 
          <_.Infochoose>
            <_.Infotext>{item.item_id}</_.Infotext>
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