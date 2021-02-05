import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
// , header = null, footer = null
export const MainLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      {children}
      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2bc0e4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaecc6,
    #2bc0e4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaecc6,
    #2bc0e4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
