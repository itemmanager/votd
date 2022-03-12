import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore"
import {getAnalytics, logEvent} from "firebase/analytics";
import {useMemo} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBcjmfvGrA8pV4pQF9rknL42kzGave2V00",
    authDomain: "votd-live.firebaseapp.com",
    projectId: "votd-live",
    appId: "1:861656073745:web:f86596ed22b6f467f7d3b0",
};

const app = initializeApp(firebaseConfig);


export function useAnalytics() {
    return getAnalytics(app)
}

export function logStartedEvent() {
    const analytics = getAnalytics(app);
    logEvent(analytics, 'started');
}


export function useFirabaseApp() {
    return app;
}

const guardian = []

function useDebugFirestore() {
    const db = useProdFirestore()
    if (guardian.length === 0) {
        connectFirestoreEmulator(db, 'localhost', 8080);
        guardian.push(true)
    }
    return db
}
function useProdFirestore() {
    return useMemo(() => getFirestore(app), [])
}

export const useFirestore = process.env.NODE_ENV === 'production' ? useProdFirestore:useDebugFirestore
