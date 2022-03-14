import {getAuth, onAuthStateChanged, signInAnonymously, connectAuthEmulator} from "firebase/auth";
import {useEffect, useState} from "react";
import {useFirabaseApp} from "./firebase";


const initialized = [];

function useDebugAuth() {
    const auth = useProdAuth()
    if(initialized.length===0) {
        connectAuthEmulator(auth, "http://localhost:9099");
        initialized.push(true)
    }
    return auth
}

function useProdAuth() {
    const app = useFirabaseApp();
    return getAuth(app)
}

export const useAuth = process.env.NODE_ENV === 'production' ? useProdAuth : useDebugAuth

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
