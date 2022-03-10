import styled from 'styled-components';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Acquisition} from "./Acquisition";
import React from 'react';
import {useAvailableNamingSchemas} from "./NamingSchema";
import {Symbols} from "./Symbols";
import {Nav} from "./Nav";

const StyledFooter = styled.footer`
    background: black;
  display: flex;
  a {
    font-size: 18px;
    color: white;
    padding: 1em;
  }
`

function Footer() {
    return <StyledFooter>
        <a href="https://itemmanager.uk/" target="_blank" rel="noreferrer">Item Manager</a>
    </StyledFooter>
}

const StyledHeader = styled.header`
  ul:first-child {
    padding: 0;
  }
    img {
      height: 2em;
    }
`;

function Header() {
    return <StyledHeader>
        <Nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={require("./images/home-logo.png")} alt="votd logo"/>
                    </Link>
                </li>
                <li className="grow" />
                <li>
                    <Link to="/names">
                        Glyph Names
                    </Link>
                </li>
            </ul>
        </Nav>
    </StyledHeader>
}

function WorkInProgress() {
    return <h1>🛠 work in progress</h1>
}

const StyledNames = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  a {
    color: #60c894;
  }
`;

function Names() {
    const schemas = useAvailableNamingSchemas();
    return <>
        <StyledNames>
            <h1>Glyph Names</h1>
            <nav>
                <ul>
                    {schemas.map(({name}) => (
                        <li key={name}>
                            <Link to={name}>
                                {name.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </StyledNames>
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
  box-shadow: rgba(96, 200, 148, 0.8) 0 0 60px;
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
