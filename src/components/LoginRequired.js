import {useAuth, useIsAuthenticated} from "../auth";
import {Loading} from "./Loading";
import {Login} from "./Login";


export function LoginRequired({children}) {
    const auth = useAuth();
    const isAuthenticated = useIsAuthenticated()
    if (!auth) {
        return <Loading/>
    }
    if (!isAuthenticated) {
        return <>This functionality requires logged in user, please log in: <Login/></>
    }
    return children
}
