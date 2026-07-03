export let gameState = {
    spiritStones: 150,
    resources: { herbs: 15, wood: 8, artifacts: 2, water: 12 },
    buildings: { hall: {level:1}, alchemy:{level:1}, talismans:{level:1}, forge:{level:1}, warehouse:{level:1} },
    zones: { meadow:{level:1}, forest:{level:1}, ruins:{level:1}, lake:{level:1} },
    cultivators: [],
    autoSell: true,
    time: 0
};

export function initCultivators() {
    for (let i = 0; i < 12; i++) {
        gameState.cultivators.push({
            id: i,
            rank: Math.floor(i/4),
            position: { x: 180 + (i%6)*85, y: 240 + Math.floor(i/6)*90 }
        });
    }
}