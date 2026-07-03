import { gameState } from './state.js';

export function gameTick(delta) {
    gameState.time += delta;
    
    // Passive income
    gameState.spiritStones += 0.08 * gameState.buildings.hall.level;
    
    // Zone production
    Object.keys(gameState.zones).forEach(k => {
        if (Math.random() < 0.025 * gameState.zones[k].level) {
            const r = Object.keys(gameState.resources)[Math.floor(Math.random()*4)];
            gameState.resources[r] = (gameState.resources[r]||0) + (1 + gameState.zones[k].level);
        }
    });
    
    // Cultivator progress
    gameState.cultivators.forEach(c => {
        if (Math.random() < 0.04) c.rank = Math.min(4, (c.rank||0) + 0.01);
    });
}