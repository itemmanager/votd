import styled from 'styled-components';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Acquisition} from "./Acquisition";
import React, {useState} from 'react';
import {NamingSchema, useAvailableNamingSchemas, useNamingSchemaName, useNamingSchemaNameSetter} from "./NamingSchema";
import {Symbols} from "./Symbols";

const StyledFooter = styled.footer``

function Footer() {
    return <StyledFooter>
        <nav>
            <ul>
                <li><a href="https://itemmanager.uk/" target="_blank" rel="noreferrer">Item Manager</a></li>
            </ul>
        </nav>
    </StyledFooter>
}

const StyledHeader = styled.header``

function Header() {
    const currentNamingSchema = useNamingSchemaName()
    return <StyledHeader>
        <nav>
            <ul>
                <li><Link to="/">Vow of the Disciple raid aid app</Link></li>
                <li><Link to="/names">{currentNamingSchema}</Link></li>
            </ul>
        </nav>
     </StyledHeader>
}

// function Index() {
//     return <nav>
//         <ul>
//             <li><Link to="approach" >Approach</Link></li>
//             <li><Link to="acquisition">Acquisition</Link></li>
//             <li><Link to="collection">Collection</Link></li>
//             <li><Link to="exhibition">Exhibition</Link></li>
//             <li><Link to="dominion">Dominion</Link></li>
//         </ul>
//     </nav>
// }


function WorkInProgress() {
    return <h1>🛠 work in progress</h1>
}


function Names() {
    const updateNamingSchema = useNamingSchemaNameSetter();
    const schemas = useAvailableNamingSchemas();
    return <>
        <h1>Glyph Names</h1>
        <nav>
            <ul>
                {schemas.map(({name}) => (
                    <li key={name}><Link to={name} onClick={() => {
                        updateNamingSchema(name)
                    }}>{name}</Link></li>
                ))}
            </ul>
        </nav>
     </>
}

function App() {
    const [namingSchema, setNamingSchema] = useState('english')

    return (
        <NamingSchema.Provider value={[namingSchema, setNamingSchema]}>
            <BrowserRouter>
                <Header/>
                        <Routes>
                            <Route path="acquisition" element={<Acquisition />}/>
                            <Route path="names/:name" element={<Symbols />}/>
                            <Route path="names" element={<Names />}/>
                            <Route path=":any" element={<WorkInProgress />} />
                            <Route index element={<Acquisition />} />
                        </Routes>
                <Footer />
            </BrowserRouter>
        </NamingSchema.Provider>
    );
}


export default App;
