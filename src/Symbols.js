import React from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

import {Symbol} from "./Symbol";
import {SymbolsContainer} from "./SymbolsContainer";
import {useNamingSchema} from "./NamingSchema";
import {StyledButton} from "./StyledButton";

export const acquisitionSymbols = [
    'ascendantPlane',
    'blackGarden',
    "blackHeart",
    "earth",
    "fleet",
    "guardian",
    "hive",
    "love",
    "savathun",
    "scorn",
    "tower",
    "witness",
    "worm",
]

export const roomSymbols = [
    "commune",
    "drink",
    "enter",
    "give",
    "grieve",
    "kill",
    "knowledge",
    "stop",
    "worship",
]

export const specialSymbols = [
    "traveller", "pyramid", "light", "darkness",
]

export const allSymbols = [
    ...specialSymbols, ...roomSymbols, ...acquisitionSymbols
]

const StyledSymbols = styled.div`
    > a > button {
      margin: 1em 0;
    }
`;

export function Symbols() {
    const {name} = useParams();
    const namingSchema = useNamingSchema(name);

    return <StyledSymbols>
        <h1>Symbols {name}</h1>
        <Link to={`/acquisition/${name}`}>
            <StyledButton>Use in acquisition</StyledButton>
        </Link>
        <SymbolsContainer>
            {allSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema[symbol]}
                    image={symbol}
                    key={symbol}
                />
            })}
        </SymbolsContainer>
    </StyledSymbols>
}
