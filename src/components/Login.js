import {StyledButton} from "./StyledButton";
import React from "react";
import {useAuth} from "../auth";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import styled from "styled-components";

const StyledLogin = styled.div`
    button {
      margin-right: 1em;
    }
`;

export function Login () {
    const auth = useAuth()
    function handleLogin(event) {
        const provider = new GoogleAuthProvider();
        event.preventDefault()
        signInWithPopup(auth, provider)
    }

    return (
        <StyledLogin>
            <StyledButton onClick={handleLogin}>
                Login
            </StyledButton>
        </StyledLogin>
    )

}
