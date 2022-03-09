import styled from 'styled-components';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Acquisition} from "./Acquisition";

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
    return <StyledHeader>
        <Link to="/">Vow of the Disciple raid aid app</Link>
    </StyledHeader>
}

function Index() {
    return <nav>
        <ul>
            <li><Link to="approach" >Approach</Link></li>
            <li><Link to="acquisition">Acquisition</Link></li>
            <li><Link to="collection">Collection</Link></li>
            <li><Link to="exhibition">Exhibition</Link></li>
            <li><Link to="dominion">Dominion</Link></li>
        </ul>
    </nav>
}


function WorkInProgress() {
    return <h1>🛠 work in progress</h1>
}


function App() {
    return (
        <BrowserRouter>
            Hello world
            <Header/>
                    <Routes>
                        <Route path="acquisition" element={<Acquisition />}/>
                        <Route path=":any" element={<WorkInProgress />} />
                        <Route index element={<Index />} />

                    </Routes>

            <Footer />
        </BrowserRouter>
    );
}


export default App;
