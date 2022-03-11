import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useGlyphNamesStorage, useNamingSchema} from "../namingSchema";
import {useUserUid} from "../auth";
import styled from "styled-components"
import {StyledButton} from "../components/StyledButton";
import {Loading} from "../components/Loading";
import {Symbol} from "../components/Symbol";
import {allSymbols} from "./Symbols";
import {SymbolsContainer} from "../components/SymbolsContainer";
import {useToastEmitter} from "../components/Toast";

const StyledEdit = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: rgb(96, 200, 148);
  }
  
  button {
    margin: 1em 0;
    
    @media (min-width: 768px) {
      margin: 2em auto;
      padding-inline: 5em;
    }
  }
`;


export function Edit() {
    const {name} = useParams()
    const [isSaving, setIsSaving] = useState(false);
    const [namingSchema, loading] = useNamingSchema(name);
    const [inEdit, setInEdit] = useState(null)
    const uid = useUserUid();
    const store = useGlyphNamesStorage();
    const toastEmitter = useToastEmitter();

    useEffect(() => {
        if (!loading) {
            setInEdit(namingSchema)
        }
    }, [loading, setInEdit])

    if (loading || !inEdit  || isSaving) {
        return <Loading/>
    }

    if (uid !== namingSchema.owner) {
        return <StyledEdit>
            <h1>
                Cannot edit not own schema
            </h1>
            <Link to={`/names/${name}`}>
                <StyledButton>
                    Back
                </StyledButton>
            </Link>
        </StyledEdit>
    }

    function handleSave() {
        setIsSaving(true);
        store(inEdit)
            .then(() => toastEmitter("Saved", "info"))
            .catch((e) => {
                console.error(e)
                toastEmitter("Failed save", "error")
            })
            .finally(() => setIsSaving(false))
    }

    return (
        <StyledEdit>
            <h1>Edit <span>{namingSchema.name}</span></h1>
            <SymbolsContainer>
                {allSymbols.map((symbol) => {
                    return  <Symbol
                        label={inEdit.names[symbol]}
                        image={symbol}
                        key={symbol}
                        onEdit={value => {
                            setInEdit({
                                ...inEdit, names: {
                                    ...inEdit.name,
                                    [symbol]: value
                                }
                            })
                        }
                        }
                    />
                })}
            </SymbolsContainer>
            <StyledButton onClick={handleSave}>Save</StyledButton>
        </StyledEdit>
    )
}
