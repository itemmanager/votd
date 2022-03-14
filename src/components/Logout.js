import React from "react";
import {useAuth} from "../auth";
import styled from "styled-components";
import {StyledButton} from "./StyledButton";
import {useToastEmitter} from "./Toast";

const StyledLogout = styled.div`
    button {
      margin-right: 1em;
    }
`;

export function Logout() {
    const toast = useToastEmitter()
    const auth = useAuth();
    function handleLogout(event) {
        event.preventDefault()
        auth.signOut().then(
            () => toast("You are logged out", "info")
        )
    }
    return (
        <StyledLogout>
            <StyledButton onClick={handleLogout}>
                Logout
            </StyledButton>
        </StyledLogout>
    )
}
