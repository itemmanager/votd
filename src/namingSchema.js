import {collection, doc, setDoc, query, where, getDocs, getDoc} from "firebase/firestore";
import {useFirestore} from "./firebase";
import {useIsAuthenticated, useUserUid} from "./auth";
import {useEffect, useState} from "react";
import {useToastEmitter} from "./components/Toast";

const englishNames = {
    ascendantPlane: "ascendant plane",
    blackGarden: "black garden",
    blackHeart: "heart",
    commune: "commune",
    darkness: "dark",
    drink: "drink",
    earth: "earth",
    enter: "drip",
    fleet: "fleet",
    give: "give",
    grieve: "grieve",
    guardian: "guardian",
    hive: "hive",
    kill: "kill",
    knowledge: "brain",
    light: "light",
    love: "love",
    pyramid: "pyramid",
    savathun: "savathun",
    scorn: "scorn",
    stop: "stop",
    tower: "tower",
    traveller: "traveller",
    witness: "witness",
    worm: "worm",
    worship: "worship",
};


const lotryNames = {
    ascendantPlane: "parasol",
    blackGarden: "garden",
    blackHeart: "plama",
    commune: "pryzmat",
    darkness: "ciemność",
    drink: "kielich",
    earth: "ziemia",
    enter: "kropla",
    fleet: "flota",
    give: "łapy",
    grieve: "dziura",
    guardian: "strażnik",
    hive: "hive",
    kill: "kolec",
    knowledge: "mózg",
    light: "jasność",
    love: "kwiat",
    pyramid: "trójkąt",
    savathun: "WQ",
    scorn: "forsaken",
    stop: "kwadrat",
    tower: "tower",
    traveller: "wędrowiec",
    witness: "świadek",
    worm: "wąż",
    worship: "ojciec",
};

const english = {id: 'english', name: 'Default english names', names: englishNames};
const lotry = {id: 'lotry', name: 'Galaktyczne Łotry', names: lotryNames};

const namingSchemas = [
    english,
    lotry
]


export function useGlyphNamesColleciton() {
    const db = useFirestore();
    return collection(db, "glyphNames")
}

export function useGlyphNamesStorage() {
    const user = useUserUid();
    const db = useFirestore();

    async function setter(obj) {
        console.log("will store", obj);
        await setDoc(doc(db, "glyphNames", obj.id), {
            ...obj,
            owner: user,
        })
    }

    return setter

}

function useOnlineNamingSchemas() {
    const isAuthenticated = useIsAuthenticated();
    const uid = useUserUid();
    const collection = useGlyphNamesColleciton();
    const [names, setNames] = useState([])

    useEffect(() => {
        if(isAuthenticated) {
            const q = query(collection, where("owner", "==", uid))
            getDocs(q).then(snapshot => {
                const collected = [];
                snapshot.forEach(doc => {
                    collected.push({id: doc.id, ...doc.data(), external: true})
                })
                setNames(collected)
            })
        }
    }, [isAuthenticated, uid])
    return names
}

/**
 * List of available naming schemas
 * @returns {[{name: string},{name: string},{name: string}]}
 */
export function useAvailableNamingSchemas() {
    const onlineNamingSchemas = useOnlineNamingSchemas()
    return [...namingSchemas, ...onlineNamingSchemas];
}

/**
 * Current resolved naming schema
 * @param id
 * @returns {{names: {hive: string, love: string, fleet: string, commune: string, savathun: string, grieve: string, blackHeart: string, ascendantPlane: string, scorn: string, enter: string, darkness: string, guardian: string, traveller: string, knowledge: string, tower: string, give: string, worm: string, kill: string, blackGarden: string, drink: string, witness: string, stop: string, light: string, earth: string, pyramid: string, worship: string}, name: string, id: string}|{names: {hive: string, love: string, fleet: string, commune: string, savathun: string, grieve: string, blackHeart: string, ascendantPlane: string, scorn: string, enter: string, darkness: string, guardian: string, traveller: string, knowledge: string, tower: string, give: string, worm: string, kill: string, blackGarden: string, drink: string, witness: string, stop: string, light: string, earth: string, pyramid: string, worship: string}, name: string, id: string}}
 */
export function useNamingSchema(id) {
    const [schema, setSchema] = useState({})
    const [loading, setLoading] = useState(true);
    const db = useFirestore();
    const toast = useToastEmitter();
    const defaultSchema = namingSchemas.find(schema => schema.id===id);

    useEffect(() => {
        if(defaultSchema) {
            return ;
        }
        const docRef = doc(db, "glyphNames", id);
        getDoc(docRef).then(docSnap => {
            if(docSnap.exists()) {
                setSchema({...docSnap.data(), external: true})
                setLoading(false)
            } else {
                toast(`Unknown language: ${id}`, 'error')
            }
        });
    }, [id, defaultSchema])
    if(defaultSchema) {
        return [defaultSchema, false]
    }
    return [schema, loading]
}

