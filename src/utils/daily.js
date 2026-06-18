import { POKEMON_DB } from "../config/pokemonDb";

// Simple seeded PRNG (Mulberry32)
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// Function to shuffle an array using a seeded PRNG
function shuffleArray(array, rng) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Simple string hash function for seeding
function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277, h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return (h1 ^ h2 ^ h3 ^ h4) >>> 0;
}

export function getDailyPokemon(gameName) {
    // Get current date
    const now = new Date();
    
    // Create a Date object for the start of today to get a stable epoch
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const msPerDay = 1000 * 60 * 60 * 24;
    
    // Calculate days since a fixed epoch (e.g., start of 2024)
    const epoch = new Date(2024, 0, 1);
    const daysSinceEpoch = Math.floor((today - epoch) / msPerDay);
    
    const dbLength = POKEMON_DB.length;
    
    // Which N-day cycle are we in? (N = POKEMON_DB.length)
    const cycle = Math.floor(daysSinceEpoch / dbLength);
    
    // Index within the cycle (0 to N-1)
    const indexWithinCycle = daysSinceEpoch % dbLength;
    
    // Seed PRNG with cycle + gameName to have different shuffles for different games, but stable for the cycle
    const seedString = `${gameName}-${cycle}`;
    const seedNumber = cyrb128(seedString);
    const rng = mulberry32(seedNumber);
    
    // Shuffle the DB for this cycle
    const shuffledDb = shuffleArray(POKEMON_DB, rng);
    
    // Pick the pokemon (guarantees exactly 1 appearance per cycle, so never repeats within N days)
    return shuffledDb[indexWithinCycle];
}
