import styled from 'styled-components';
import {Neutral, Symbol} from "./Symbol";
import {useState} from "react";
import {useNamingSchema} from "./NamingSchema";
import {Buttons} from "./Buttons";

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
    // "pyramid",
    "savathun",
    "scorn",
    // "stop",
    "tower",
    "witness",
    "worm",
    // "worship",
]



const StyledSelected = styled.div`
  display: flex;
  gap: 1em;
  
  justify-content: center;
  > * {
    max-width: 120px;
  }
`

function Selected({symbols, translations, onSelect}) {
    return <StyledSelected>
        {symbols.map(symbol => <Symbol
            label={translations[symbol]}
            image={symbol}
            key={symbol}
            onSelect={onSelect}
        /> )}
        {Array.from({length: Math.max(0, 3 - symbols.length) }).map((item, index) => <Neutral key={`neutral-${index}`}/>)}
    </StyledSelected>
}

function toggle(items, item, maxLength = 3) {
    const pos = items.indexOf(item)
    if (pos !== -1) {
        return items.filter(curr => curr !== item)
    }

    return [...items, item].splice(-maxLength, maxLength)
}

export function Acquisition({allSymbols}) {
    const [selected, setSelected] = useState([])
    const namingSchema = useNamingSchema();

    function handleSymbolSelect(symbol) {
        setSelected(toggle(selected, symbol))
    }

    return <StyledAcquisition>
        <h1>Acquisition</h1>
        <Selected
            symbols={selected}
            translations={namingSchema}
            onSelect={handleSymbolSelect}
        />
        {selected.length<3?(
        <Buttons>
            {allSymbols.map((symbol) => {
                return <Symbol
                    label={namingSchema[symbol]}
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
    allSymbols: allSymbols,
}
