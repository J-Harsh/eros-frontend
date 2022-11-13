import { useState } from "react";
import { Routes,Route, BrowserRouter, Navigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video"
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import Search from "./pages/Search";

const Container=styled.div`
display: flex;
min-height: 100vh;
`;

const Main=styled.main`
flex: 7;
background-color: ${({theme})=>theme.bg};

`;

const Wrapper=styled.div`
`;

function App() {

  const [darkMode,setDarkMode]=useState(true);  
  const [showSideBar,setShowSideBar]=useState(true);

  console.log(useSelector(state=>state));

  return (
    <ThemeProvider theme={darkMode? DarkTheme : LightTheme} >
    <Container className="App">
    <BrowserRouter>
      {showSideBar && <Menu setShowSideBar={setShowSideBar} darkMode={darkMode} setDarkMode={setDarkMode}/>}
      <Main>
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Wrapper>
          <Routes>
            <Route path="/" >
              <Route index element={<Home type="random" />}/>
              <Route path="trending" element={<Home type="trending" />}/>
              <Route path="subscriptions" element={<Home type="subscriptions" />}/>
              <Route path="search" element={<Search />} />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="video">
                <Route path=":videoId" element={<Video/>} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
