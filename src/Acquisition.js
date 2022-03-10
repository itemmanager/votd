import styled from 'styled-components';
import {Neutral, Symbol} from "./Symbol";
import {useState} from "react";

const StyledAcquisition = styled.div``

const allSymbols = [
    'ascendantPlane',
    'blackGarden',
    "blackHeart",
    // "commune",
    // "darkness",
    // "drink",
    "earth",
    // "enter",
    "fleet",
    // "give",
    // "grieve",
    "guardian",
    "hive",
    // "kill",
    // "knowledge",
    // "light",
    "love",
    "pyramid",
    "savathun",
    "scorn",
    // "stop",
    "tower",
    "witness",
    "worm",
    // "worship",
]

const defaultTranslations = {
    ascendantPlane: "ascendant plane",
    blackGarden: "black garden",
    blackHeart: "black heart",
    commune: "commune",
    darkness: "darkness",
    drink: "drink",
    earth: "earth",
    enter: "enter",
    fleet: "fleet",
    give: "give",
    grieve: "grieve",
    guardian: "guardian",
    hive: "hive",
    kill: "kill",
    knowledge: "knowledge",
    light: "light",
    love: "love",
    pyramid: "pyramid",
    savathun: "savathun",
    scorn: "scorn",
    stop: "stop",
    tower: "tower",
    witness: "witness",
    worm: "worm",
    worship: "worship",
};

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`

const StyledSelected = styled.div`
  display: flex;
`

function Selected({symbols, translations, onSelect}) {
    console.log(Math.max(0, 3 - symbols.length) )
    return <StyledSelected>
        {symbols.map(symbol => <Symbol
            label={translations[symbol]}
            image={symbol}
            key={symbol}
            onSelect={onSelect}
        /> )}
        {Array.from({length: Math.max(0, 3 - symbols.length) }).map(() => <Neutral />)}
    </StyledSelected>
}

function toggle(items, item, maxLength = 3) {
    const pos = items.indexOf(item)
    if (pos !== -1) {
        return items.filter(curr => curr !== item)
    }

    return [...items, item].splice(-maxLength, maxLength)
}

export function Acquisition({translations, allSymbols}) {
    const [selected, setSelected] = useState([])

    function handleSymbolSelect(symbol) {
        setSelected(toggle(selected, symbol))
    }

    return <StyledAcquisition>
        <h1>Acquisition</h1>
        <Selected
            symbols={selected}
            translations={translations}
            onSelect={handleSymbolSelect}
        />
        {selected.length<3?(
        <Buttons>
            {allSymbols.map((symbol) => {
                return <Symbol
                    label={translations[symbol]}
                    image={symbol}
                    key={symbol}
                    onSelect={handleSymbolSelect}
                    selected={selected.indexOf(symbol) !== -1}
                />
            })}
        </Buttons>
            ):
        <button onClick={()=> setSelected([])}>Reset</button>}

    </StyledAcquisition>
}

Acquisition.defaultProps = {
    translations: defaultTranslations,
    allSymbols: allSymbols,
}
