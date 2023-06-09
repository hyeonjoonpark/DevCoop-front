import React from 'react'
import * as _ from "./style"
import * as P from "../../common/PageWrapStyle"
import Header from '../Header'

const Main = () => {
  return (
    <>
    <P.PageWrap>
      <P.PageContainer>
        <Header/>
        <_.maintop>
          <_.topdiv></_.topdiv>
          <_.bottomdiv>
            <_.Infotext>사용 내역이 궁금하다면?</_.Infotext>
          </_.bottomdiv>
        </_.maintop>
        <_.mainbottom>
          <_.usediv></_.usediv>
          <_.askdiv></_.askdiv>
        </_.mainbottom>
      </P.PageContainer>
    </P.PageWrap>
    </>
  )
}

export default Main