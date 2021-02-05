import React from 'react';
import styled from 'styled-components';
import logoImage from '../../styles/images/Logo.png';

export function Header() {
  return (
    <>
      <MainHeaderWrapper>
        <HeaderContents>헤더입니다.</HeaderContents>
      </MainHeaderWrapper>
    </>
  );
}

const MainHeaderWrapper = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  background: #fff;
  padding: rem(40) 0 0 rem(40);
  width: 100%;
  height: rem(116);
  box-sizing: border-box;
  animation: headerVerticalOpen 0.5s 0s ease 1 backwards;
`;

const HeaderContents = styled.div`
  float: left;
  position: relative;
  margin-top: rem(16);
  padding: rem(18) 0 rem(30);
  width: 20%;
  height: rem(108);
  box-sizing: border-box;
`;
