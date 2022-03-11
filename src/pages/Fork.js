import styled from "styled-components"
import {useParams} from "react-router-dom";
import {useGlyphNamesStorage, useNamingSchema} from "../namingSchema";
import {useRef, useState} from "react";
import {useToastEmitter} from "../components/Toast";
import {useUserUid} from "../auth";
import {uuid4} from "../tools";
import {Loading} from "../components/Loading";

const StyledFork = styled.section``

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    input {
      background: transparent;
      color: var(--color)
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

        const newNamingSchema = {
            ...namingSchema,
            id: uuid4(),
            name: newName
        }
        store(newNamingSchema)
            .then(() => toastEmitter("TODO: Redirect"))
            .catch((e) => {
                toastEmitter(`Failed to create new glyph names`, "error")
            })
            .finally(() => setFormEnabled(true))
        console.log(newNamingSchema)
    }


    return <StyledFork>
        <h1>Fork {namingSchema.name}</h1>
        <StyledForm onSubmit={handleSubmit}>
            <label>name<input type="text" ref={nameRef}/></label>
            <button disabled={!formEnabled}>create</button>
        </StyledForm>
    </StyledFork>
}
