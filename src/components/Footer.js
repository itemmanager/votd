import styled from "styled-components";
import React from "react";

const StyledFooter = styled.footer`
  background: black;
  display: flex;

  a {
    font-size: 18px;
    color: white;
    padding: 1em;
  }
`

export function Footer() {
    return <StyledFooter>
        <a href="https://itemmanager.uk/" target="_blank" rel="noreferrer">Item Manager</a>
    </StyledFooter>
}
