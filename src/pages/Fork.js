import styled from "styled-components"
import {useNavigate, useParams} from "react-router-dom";
import {useGlyphNamesStorage, useNamingSchema} from "../namingSchema";
import {useRef, useState} from "react";
import {useToastEmitter} from "../components/Toast";
import {randomId} from "../tools";
import {Loading} from "../components/Loading";
import {StyledButton} from "../components/StyledButton";

const StyledFork = styled.div`
  span {
    color: rgb(96, 200, 148);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  label {
    display: flex;
    flex-direction: column;

    input {
      background: transparent;
      color: var(--color);
      border: 1px solid rgba(96, 200, 148, 0.5);
      margin: 1em 0;
      padding: 0.5em;
    }
  }

  button {
    margin: 1em 0;

    @media (min-width: 768px) {
      margin: 2em auto;
      padding-inline: 5em;
    }
  }
`

export function Fork() {
    const [formEnabled, setFormEnabled] = useState(true)
    const {name} = useParams()
    const [namingSchema, loading] = useNamingSchema(name);
    const nameRef = useRef();
    const toastEmitter = useToastEmitter();
    const store = useGlyphNamesStorage();
    const navigate = useNavigate();

    if(loading) {
        return <Loading/>
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newName = nameRef.current.value;
        let error = false
        if (!newName) {
            toastEmitter("name cannot be empty", "error")
            error = true;
        }
        if(error) {
            return
        }
        setFormEnabled(false);
        const newId = randomId();
        const newNamingSchema = {
            ...namingSchema,
            id: newId,
            name: newName
        }
        store(newNamingSchema)
            .then(() => navigate(`/names/${newId}/edit`))
            .catch((e) => {
                toastEmitter(`Failed to create new glyph names`, "error")
            })
            .finally(() => setFormEnabled(true))
        console.log(newNamingSchema)
    }


    return (
        <StyledFork>
            <h1>Fork <span>{namingSchema.name}</span></h1>
            <StyledForm onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" ref={nameRef} placeholder="Name your Glyphs"/>
                </label>
                <StyledButton disabled={!formEnabled}>
                    Create
                </StyledButton>
            </StyledForm>
        </StyledFork>
    )
}
