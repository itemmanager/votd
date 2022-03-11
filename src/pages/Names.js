import styled from "styled-components";
import {useAvailableNamingSchemas} from "../namingSchema";
import {Link} from "react-router-dom";
import React from "react";

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

export function Names() {
    const schemas = useAvailableNamingSchemas();
    return <>
        <StyledNames>
            <h1>Glyph Names</h1>
            <nav>
                <ul>
                    {schemas.map(({name, id}) => (
                        <li key={id}>
                            <Link to={id}>
                                {name.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </StyledNames>
    </>
}
