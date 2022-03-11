import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAnalytics, logEvent} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBcjmfvGrA8pV4pQF9rknL42kzGave2V00",
    authDomain: "votd-live.firebaseapp.com",
    projectId: "votd-live",
    storageBucket: "votd-live.appspot.com",
    messagingSenderId: "861656073745",
    appId: "1:861656073745:web:f86596ed22b6f467f7d3b0",
    measurementId: "G-PX7H4F196C"
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

export function useFirestore() {
    const app = useFirabaseApp();
    return getFirestore(app);
}
