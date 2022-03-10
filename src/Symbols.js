import React from "react";
import {Link, useParams} from "react-router-dom";
import {Symbol} from "./Symbol";
import {Buttons} from "./Buttons";
import {useNamingSchema} from "./NamingSchema";


const allSymbols = [
    'ascendantPlane',
    'blackGarden',
    "blackHeart",
    "commune",
    "darkness",
    "drink",
    "earth",
    "enter",
    "fleet",
    "give",
    "grieve",
    "guardian",
    "hive",
    "kill",
    "knowledge",
    "light",
    "love",
    "pyramid",
    "savathun",
    "scorn",
    "stop",
    "tower",
    "traveller",
    "witness",
    "worm",
    "worship",
]

export function Symbols() {
    const {name} = useParams();
    const namingSchema = useNamingSchema(name);

    return <>
        <h1>Symbols {name}</h1>
        <Link to={`/acquisition/${name}`}><button>Use in acquisition</button></Link>
        <Buttons>
            {allSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema[symbol]}
                    image={symbol}
                    key={symbol}
                />
            })}
        </Buttons>
    </>
}