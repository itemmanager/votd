import styled from 'styled-components';
import {Neutral, Symbol} from "../components/Symbol";
import {useState} from "react";
import {useNamingSchema} from "../namingSchema";
import {SymbolsContainer} from "../components/SymbolsContainer";
import {useParams} from "react-router-dom";
import {acquisitionSymbols} from "./Symbols";
import {StyledButton} from "../components/StyledButton";
import {Loading} from "../components/Loading";

const StyledAcquisition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  > button {
    padding-inline: 5em;
    margin: 0 auto;
  }
`;


const StyledSelected = styled.div`
  display: grid;
  margin-inline: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  max-width: calc(360px + 2em);
  justify-content: center;

  > * {
    max-width: 120px;
    aspect-ratio: 1;
  }
`;

function Selected({symbols, translations, onSelect}) {
    return <StyledSelected>
        {symbols.map(symbol => <Symbol
            label={translations[symbol]}
            image={symbol}
            key={symbol}
            onSelect={onSelect}
        />)}
        {Array.from({length: Math.max(0, 3 - symbols.length)}).map((item, index) => <Neutral
            key={`neutral-${index}`}/>)}
    </StyledSelected>
}

function toggle(items, item, maxLength = 3) {
    const pos = items.indexOf(item)
    if (pos !== -1) {
        return items.filter(curr => curr !== item)
    }

    return [...items, item].splice(-maxLength, maxLength)
}

export function Acquisition({symbols}) {
    const [selected, setSelected] = useState([])
    const {symbol} = useParams();
    const [namingSchema, loading] = useNamingSchema(symbol ?? "english");

    if(loading) {
        return <Loading />
    }
    function handleSymbolSelect(symbol) {
        setSelected(toggle(selected, symbol))
    }

    return <StyledAcquisition>
        <h1>Acquisition</h1>
        <Selected
            symbols={selected}
            translations={namingSchema.names}
            onSelect={handleSymbolSelect}
        />
        {selected.length < 3 ? (
                <SymbolsContainer>
                    {symbols.map((symbol) => {
                        return <Symbol
                            label={namingSchema.names[symbol]}
                            image={symbol}
                            key={symbol}
                            onSelect={handleSymbolSelect}
                            selected={selected.indexOf(symbol) !== -1}
                        />
                    })}
                </SymbolsContainer>
            ) :
            <StyledButton onClick={() => setSelected([])}>Reset</StyledButton>}

    </StyledAcquisition>
}

Acquisition.defaultProps = {
    symbols: acquisitionSymbols
}
