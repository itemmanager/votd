import React from "react";
import {Link, useParams} from "react-router-dom";
import {Symbol} from "./Symbol";
import {Buttons} from "./Buttons";
import {useNamingSchema} from "./NamingSchema";

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

// export const allSymbols = [
//     ...specialSymbols, ...roomSymbols, ...acquisitionSymbols
// ]

export function Symbols() {
    const {name} = useParams();
    const namingSchema = useNamingSchema(name);

    return <>
        <h1>Symbols {name}</h1>
        <Link to={`/acquisition/${name}`}><button>Use in acquisition</button></Link>
        <h2>Special</h2>
        <Buttons>
            {specialSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema[symbol]}
                    image={symbol}
                    key={symbol}
                />
            })}
        </Buttons>
        <h2>Rooms</h2>
        <Buttons>
            {roomSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema[symbol]}
                    image={symbol}
                    key={symbol}
                />
            })}
        </Buttons>
        <h2>Acquisition</h2>
        <Buttons>
            {acquisitionSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema[symbol]}
                    image={symbol}
                    key={symbol}
                />
            })}
        </Buttons>
    </>
}