import React from 'react';
import * as P from 'common/PageWrapStyle';
import ChargeComplete from 'components/Admin/ChargeComplete';

export default function ChargeCompletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <ChargeComplete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
