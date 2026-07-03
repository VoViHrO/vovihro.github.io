import { initCultivators } from './core/state.js';
import { gameTick } from './core/gameLoop.js';
import { render } from './render/renderer.js';
import { updateUI } from './ui/ui.js';

initCultivators();

let last = performance.now();

function loop() {
    const now = performance.now();
    const dt = now - last;
    last = now;
    
    gameTick(dt);
    render();
    updateUI();
    
    requestAnimationFrame(loop);
}

loop();

console.log('Tiny Sect загружен! Собирай, улучшай, развивай секту!');