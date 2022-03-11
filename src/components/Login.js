import {StyledButton} from "./StyledButton";
import React from "react";
import {useAuth} from "../auth";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";


export function Login () {
    const auth = useAuth()
    function handleLogin(event) {
        const provider = new GoogleAuthProvider();

        event.preventDefault()
        signInWithPopup(auth, provider)
    }

    return <StyledButton onClick={handleLogin}>Login</StyledButton>
}
