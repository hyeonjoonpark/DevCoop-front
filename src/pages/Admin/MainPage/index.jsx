import React from 'react';
import * as _ from './style';
import * as P from 'common/PageWrapStyle';
import AdminRouter from 'components/Admin/AdminRouter';
import AdminMainHeader from './AdminMainHeader';
import SideBar from './SideBar';

export default function AdminMainPage() {
  return (
    <P.AdminWrap>
      <AdminMainHeader />
      <P.AdminMainPageContainer>
        <SideBar />
        <P.AdminSubPageContainer>
          <AdminRouter />
        </P.AdminSubPageContainer>
      </P.AdminMainPageContainer>
    </P.AdminWrap>
  );
}
