const defaultNamingSchema = {
    ascendantPlane: "plane",
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


const lotryNamingSchema = {
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

const namingSchemas = [
    {name: 'english'},
    {name: 'lotry'},
]

const existingNamingSchemas = {
    'english': defaultNamingSchema,
    'lotry': lotryNamingSchema
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

