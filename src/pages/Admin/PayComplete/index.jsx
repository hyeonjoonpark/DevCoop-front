import React from 'react';
import * as P from 'common/PageWrapStyle';
import PayComplete from 'components/Admin/PayComplete';

export default function PayCompletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <PayComplete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
