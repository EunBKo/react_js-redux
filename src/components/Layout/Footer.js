import React from 'react';
import styled from 'styled-components';

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContents>푸터입니다.</FooterContents>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: fixed;
  z-index: 200;
  bottom: 0;
  background: #fff;
  padding: rem(40) 0 0 rem(40);
  width: 100%;
  height: rem(116);
  box-sizing: border-box;
  animation: headerVerticalOpen 0.5s 0s ease 1 backwards;
`;

const FooterContents = styled.div`
  float: left;
  position: relative;
  margin-top: rem(16);
  padding: rem(18) 0 rem(30);
  width: 20%;
  height: rem(108);
  box-sizing: border-box;
`;
