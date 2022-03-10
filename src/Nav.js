import styled from "styled-components";

export const Nav = styled.nav`
  background-color: black;
  a {
    color: white;
    display: block;
  }
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0.5em;
    gap: 1em;
  }
  li {
    padding: 0.5em;
  }
  .grow {
    flex-grow: 1;
  }
`
