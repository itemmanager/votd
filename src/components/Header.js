import {Nav} from "./Nav";
import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {useIsAuthenticated} from "../auth";
import {Logout} from "./Logout";
import {Login} from "./Login";

const StyledHeader = styled.header`
  ul:first-child {
    padding: 0;
  }

  img {
    height: 2em;
  }
`;

export function Header() {
    const isAuthenticated = useIsAuthenticated();
    return <StyledHeader>
        <Nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={require("../images/home-logo.png")} alt="votd logo"/>
                    </Link>
                </li>
                <li className="grow"/>
                <li>
                    <Link to="/names">
                        Glyph Names
                    </Link>
                </li>
                {isAuthenticated?<Logout />:<Login />}
            </ul>
        </Nav>
    </StyledHeader>
}
