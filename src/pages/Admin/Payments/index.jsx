import React from 'react';
import Payments from 'components/Admin/Payments';
import * as P from 'common/PageWrapStyle';

export default function PaymentsPage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Payments />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
