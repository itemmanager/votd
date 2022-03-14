import styled from 'styled-components';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Acquisition} from "./pages/Acquisition";
import React from 'react';
import {Symbols} from "./pages/Symbols";
import {Names} from "./pages/Names";
import {WorkInProgress} from "./pages/WorkInProgress";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Fork} from "./pages/Fork";
import {LoginRequired} from "./components/LoginRequired";
import {ToastContextProvider, Toasts} from "./components/Toast";
import {Edit} from "./pages/Edit";

const MainBody = styled.section`
  padding: 1em;
  flex-grow: 1;
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: rgba(96, 200, 148, 0.8) 0 0 60px;
`

function App() {
    return (
        <BrowserRouter>
            <ToastContextProvider>
                <AppContainer>
                    <Header/>
                    <MainBody>
                        <Toasts />
                        <Routes>
                            <Route path="acquisition/:symbol" element={<Acquisition/>}/>
                            <Route path="acquisition" element={<Acquisition/>}/>
                            <Route path="names/:name/fork" element={<LoginRequired><Fork/></LoginRequired>}/>
                            <Route path="names/:name/edit" element={<LoginRequired><Edit/></LoginRequired>}/>
                            <Route path="names/:name" element={<Symbols/>}/>
                            <Route path="names" element={<Names/>}/>
                            <Route path=":any" element={<WorkInProgress/>}/>
                            <Route index element={<Acquisition/>}/>
                        </Routes>
                    </MainBody>
                    <Footer/>
                </AppContainer>
            </ToastContextProvider>
        </BrowserRouter>
    );
}


export default App;
