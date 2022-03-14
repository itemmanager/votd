export function randomId() {
    return Array.from({length: 32}).map(() => Math.floor(Math.random()*16).toString(16)).join('');
}
