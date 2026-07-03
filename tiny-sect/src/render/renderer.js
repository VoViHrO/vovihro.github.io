import { gameState } from '../core/state.js';
import { gameData } from '../data/gameData.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export function render() {
    ctx.fillStyle = '#0a1a0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Buildings
    ctx.fillStyle = '#335533';
    Object.keys(gameState.buildings).forEach((key, i) => {
        ctx.fillRect(100 + i*110, 180, 85, 75);
        ctx.fillStyle = '#ccffcc';
        ctx.font = 'bold 13px monospace';
        ctx.fillText(gameData.buildings[key].name.slice(0,9), 110 + i*110, 205);
        ctx.fillText('Lv.' + gameState.buildings[key].level, 115 + i*110, 235);
        ctx.fillStyle = '#335533';
    });
    
    // Zones
    ctx.fillStyle = '#223355';
    Object.keys(gameState.zones).forEach((key, i) => {
        ctx.fillRect(720 + i*115, 160, 100, 70);
        ctx.fillStyle = '#aaddff';
        ctx.fillText(gameData.zones[key].name.slice(0,10), 730 + i*115, 185);
        ctx.fillText('Lv.' + gameState.zones[key].level, 735 + i*115, 210);
        ctx.fillStyle = '#223355';
    });
    
    // Cultivators
    ctx.fillStyle = '#ffdd77';
    gameState.cultivators.forEach((c,i) => {
        const x = c.position.x + Math.sin(gameState.time/300 + i)*8;
        const y = c.position.y + Math.cos(gameState.time/250 + i)*5;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.fillText('★'.repeat(Math.floor(c.rank||0)+1), x-8, y+4);
        ctx.fillStyle = '#ffdd77';
    });
    
    // Particles
    ctx.fillStyle = '#ffaa33';
    for (let i = 0; i < 20; i++) {
        ctx.fillRect(250 + Math.random()*700, 220 + Math.random()*220, 2.5, 2.5);
    }
}