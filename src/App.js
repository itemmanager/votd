import styled from 'styled-components';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Acquisition} from "./Acquisition";
import React from 'react';
import {useAvailableNamingSchemas} from "./NamingSchema";
import {Symbols} from "./Symbols";
import {Nav} from "./Nav";

const StyledFooter = styled.footer`
    background: black;
`

function Footer() {
    return <StyledFooter>
        <Nav>
            <ul>
                <li><a href="https://itemmanager.uk/" target="_blank" rel="noreferrer">Item Manager</a></li>
            </ul>
        </Nav>
    </StyledFooter>
}

const StyledHeader = styled.header``

function Header() {
    return <StyledHeader>
        <Nav>
            <ul>
                <li><Link to="/names">Change names</Link></li>
            </ul>
        </Nav>
    </StyledHeader>
}

function WorkInProgress() {
    return <h1>🛠 work in progress</h1>
}


function Names() {
    const schemas = useAvailableNamingSchemas();
    return <>
        <h1>Glyph Names</h1>
        <nav>
            <ul>
                {schemas.map(({name}) => (
                    <li key={name}><Link to={name}>{name}</Link></li>
                ))}
            </ul>
        </nav>
    </>
}

const MainBody = styled.section`
    padding: 1em;
  flex-grow: 1;
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`

function App() {

    return (
        <BrowserRouter>
            <AppContainer>
            <Header/>
            <MainBody>
            <Routes>
                <Route path="acquisition" element={<Acquisition/>}/>
                <Route path="acquisition/:symbol" element={<Acquisition/>}/>
                <Route path="names/:name" element={<Symbols/>}/>
                <Route path="names" element={<Names/>}/>
                <Route path=":any" element={<WorkInProgress/>}/>
                <Route index element={<Acquisition/>}/>
            </Routes>
            </MainBody>
            <Footer/>
            </AppContainer>
        </BrowserRouter>
    );
}


export default App;
