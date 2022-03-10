import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  a {
    color: white;
    text-decoration: none;
    display: block;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0.5em;
  }
`