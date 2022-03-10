const defaultNamingSchema = {
    ascendantPlane: "ascendant plane",
    blackGarden: "black garden",
    blackHeart: "black heart",
    commune: "commune",
    darkness: "darkness",
    drink: "drink",
    earth: "earth",
    enter: "enter",
    fleet: "fleet",
    give: "give",
    grieve: "grieve",
    guardian: "guardian",
    hive: "hive",
    kill: "kill",
    knowledge: "knowledge",
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



const przemoNamingSchema = {
    ascendantPlane: "parasol",
    blackGarden: "rosja",
    blackHeart: "plama",
    commune: "piramida",
    darkness: "czarny",
    drink: "napój",
    earth: "ziamia",
    enter: "kropla",
    fleet: "doritos",
    give: "pazury",
    grieve: "dziura",
    guardian: "strażnik",
    hive: "hive",
    kill: "przebicie",
    knowledge: "mózg",
    light: "jasna",
    love: "koniczyna",
    pyramid: "trójkąt",
    savathun: "WQ",
    scorn: "scorny",
    stop: "kwadrat",
    tower: "wieża",
    traveller: "dzień",
    witness: "świadek",
    worm: "eska/s",
    worship: "stary",
};

const namingSchemas = [
    {name: 'english'},
    {name: 'przemo'},
]

const existingNamingSchemas = {
    'english': defaultNamingSchema,
    'przemo': przemoNamingSchema
}

/**
 * List of available naming schemas
 * @returns {[{name: string},{name: string},{name: string}]}
 */
export function useAvailableNamingSchemas() {
    return namingSchemas
}

/**
 * Current resolved naming schema
 * @returns {{hive: string, love: string, fleet: string, commune: string, savathun: string, grieve: string, blackHeart: string, ascendantPlane: string, scorn: string, enter: string, darkness: string, guardian: string, knowledge: string, tower: string, give: string, worm: string, kill: string, blackGarden: string, drink: string, witness: string, stop: string, light: string, earth: string, pyramid: string, worship: string}}
 */
export function useNamingSchema(name) {
    return existingNamingSchemas[name] ?? defaultNamingSchema
}

