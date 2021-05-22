import React from 'react';
import styled from "styled-components";
import Header from "./Header";

const MarketContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Layout = ({children}) => {
  return(
    <MarketContainer>
      <Header />
      {children}
    </MarketContainer>
  )
}

export default Layout;
