import {useAuth, useIsAuthenticated} from "../auth";
import styled from "styled-components";

import {Loading} from "./Loading";
import {Login} from "./Login";

const StyledRequiredLogin = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 2em;
  margin: 0 auto;
  
  h1 {
    margin-bottom: 2em;
  }
`;

export function LoginRequired({children}) {
    const auth = useAuth();
    const isAuthenticated = useIsAuthenticated()
    if (!auth) {
        return <Loading/>
    }
    if (!isAuthenticated) {
        return (
            <StyledRequiredLogin>
                <h1>
                    To be able to save your copy, please log in.
                </h1>
                <Login/>
            </StyledRequiredLogin>
        )
    }
    return children
}
