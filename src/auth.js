import {getAuth, onAuthStateChanged, signInAnonymously} from "firebase/auth";
import {useEffect, useState} from "react";
import {useFirabaseApp} from "./firebase";


export function useAuth() {
    const app = useFirabaseApp();
    return getAuth(app)
}

export function useUserUid() {
    const user = useUser();
    if (user) {
        return user.uid
    }
    return null
}

export function useUser() {
    const [user, setUser] = useState('');
    const auth = useAuth();

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                signInAnonymously(auth).catch(console.error);
            }
        })
    }, [user, auth])
    return user;
}

export function useIsAuthenticated() {
    const user = useUser();
    return user?.isAnonymous === false;
}
