import React from 'react';
import { MainContainer } from '../../containers/Main';
import { Header, Footer, MainLayout } from 'components';

export function MainPage() {
  return (
    <>
      <MainLayout header={<Header />} footer={<Footer />}>
        <MainContainer />
      </MainLayout>
    </>
  );
}
