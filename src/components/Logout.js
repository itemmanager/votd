import {StyledButton} from "./StyledButton";
import React from "react";
import {useAuth} from "../auth";
import {useToastEmitter} from "./Toast";

export function Logout() {
    const toast = useToastEmitter()
    const auth = useAuth();
    function handleLogout(event) {
        event.preventDefault()
        auth.signOut().then(
            () => toast("You are logged out", "info")
        )
    }
    return <StyledButton onClick={handleLogout}>Logout</StyledButton>
}
