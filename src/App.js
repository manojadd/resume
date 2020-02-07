import React from "react";
import styled from "styled-components";
import LandingPage from "./journey/LandingPage";

const AppContainer = styled.div``;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppIntro = styled.p`
  font-size: large;
`;

function App() {
  return (
    <AppContainer>
      {/* <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>Welcome to React</AppTitle>
      </AppHeader>
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
       </AppIntro> */}
      <LandingPage></LandingPage>
    </AppContainer>
  );
}

export default App;
