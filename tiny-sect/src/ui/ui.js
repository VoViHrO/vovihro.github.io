import { gameState } from '../core/state.js';
import { gameData } from '../data/gameData.js';

export function updateUI() {
    const html = `
        <div class="panel" style="top:15px;left:15px">
            <h2>🏯 Tiny Sect</h2>
            <p><b>Spirit Stones:</b> ${Math.floor(gameState.spiritStones)}</p>
            <p>Herbs: ${gameState.resources.herbs||0} | Wood: ${gameState.resources.wood||0}</p>
            <p>Artifacts: ${gameState.resources.artifacts||0} | Water: ${gameState.resources.water||0}</p>
            <button onclick="window.buyCultivator()">Hire Cultivator (80 SS)</button>
        </div>
        
        <div class="panel" style="top:15px;right:15px">
            <h3>Buildings</h3>
            ${Object.keys(gameState.buildings).map(k => {
                const lvl = gameState.buildings[k].level;
                return `<div>${gameData.buildings[k].name} Lv${lvl} <button onclick="window.upgradeBuilding('${k}')">↑ Upgrade</button></div>`;
            }).join('')}
        </div>
        
        <div class="panel" style="bottom:15px;left:15px">
            <h3>Zones</h3>
            ${Object.keys(gameState.zones).map(k => `<div>${gameData.zones[k].name} Lv${gameState.zones[k].level} <button onclick="window.upgradeZone('${k}')">↑</button></div>`).join('')}
        </div>
        
        <div class="panel" style="bottom:15px;right:15px">
            <button onclick="window.toggleAutoSell()">Auto Sell: ${gameState.autoSell ? 'ON' : 'OFF'}</button>
            <p>Cultivators: ${gameState.cultivators.length}/30</p>
        </div>
    `;
    document.getElementById('ui').innerHTML = html;
}

window.upgradeBuilding = (key) => {
    const b = gameState.buildings[key];
    const cost = 35 * b.level;
    if (gameState.spiritStones >= cost && b.level < 4) {
        gameState.spiritStones -= cost;
        b.level++;
    }
};

window.upgradeZone = (key) => {
    const z = gameState.zones[key];
    const cost = 55 * z.level;
    if (gameState.spiritStones >= cost && z.level < 4) {
        gameState.spiritStones -= cost;
        z.level++;
    }
};

window.buyCultivator = () => {
    if (gameState.spiritStones >= 80 && gameState.cultivators.length < 30) {
        gameState.spiritStones -= 80;
        const id = gameState.cultivators.length;
        gameState.cultivators.push({id, rank: 0, position: {x: 250 + Math.random()*400, y: 280 + Math.random()*120}});
    }
};

window.toggleAutoSell = () => { gameState.autoSell = !gameState.autoSell; };