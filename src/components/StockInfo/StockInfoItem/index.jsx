import React, { useState, useEffect } from "react";
import * as _ from "./style";
import styled from "styled-components";
import PrettyDateTime from "../../../utils/Date";

export const StockInfoItem = ({ stockInfo }) => {

  return (
    <InfoWrap>
      <_.Info>
        <_.Infochoose>
          <_.Infotext>{stockInfo.item_id}</_.Infotext>
        </_.Infochoose>
        <_.Infochooses>
          <_.Infotext>{stockInfo.item_name}</_.Infotext>
        </_.Infochooses>
        <_.Infochoose>
          <_.Infotext>{stockInfo.quantity}</_.Infotext>
        </_.Infochoose>
        <_.Infochooses>
          <_.Infotext>{PrettyDateTime(stockInfo.last_updated)}</_.Infotext>
        </_.Infochooses>
      </_.Info>
    </InfoWrap>
  );
};

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  flex-direction: column;
`;
