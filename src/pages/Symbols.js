import React from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

import {Symbol} from "../components/Symbol";
import {SymbolsContainer} from "../components/SymbolsContainer";
import {useNamingSchema} from "../namingSchema";
import {StyledButton} from "../components/StyledButton";
import {useUserUid} from "../auth";
import {Loading} from "../components/Loading";

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
    margin: 1em 1em 1em 0;
  }
`;


export function Symbols() {
    const {name} = useParams();
    const [namingSchema, loading] = useNamingSchema(name);
    const uid = useUserUid();
    if(loading) {
        return <Loading />
    }

    return <StyledSymbols>
        <h1>Symbols {namingSchema.name}</h1>
        <Link to={`/acquisition/${name}`}>
            <StyledButton>Use in acquisition</StyledButton>
        </Link>
        <Link to="fork">
            <StyledButton>Fork</StyledButton>
        </Link>
        {uid===namingSchema.owner?<Link to="edit"><StyledButton>Edit</StyledButton></Link>:""}

        <SymbolsContainer>
            {allSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema.names[symbol]}
                    image={symbol}
                    key={symbol}
                />
            })}
        </SymbolsContainer>
    </StyledSymbols>
}
