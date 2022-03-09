import styled from 'styled-components';
import {BrowserRouter, Link, Route} from "react-router-dom";

const StyledFooter = styled.footer``

function Footer() {
    return <StyledFooter>
        <nav>
            <ul>
                <li><a href="https://itemmanager.uk/" target="_blank">Item Manager</a></li>
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
        <li>
            <ul><Link >Approach</Link></ul>
            <ul><Link >Acquisition</Link></ul>
            <ul><Link >Collection</Link></ul>
            <ul><Link >Exhibition</Link></ul>
            <ul><Link >Dominion</Link></ul>
        </li>
    </nav>
}

function App() {
    return (
        <div>
            <Header/>
                <BrowserRouter>
                    <Route index element={<Index />} />
                </BrowserRouter>
            <Footer />
        </div>
    );
}


export default App;
