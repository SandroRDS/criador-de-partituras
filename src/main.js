import { Piano } from './Piano.js';

const piano = new Piano();
window.addEventListener('keydown', (event) => piano.escutarTecla(event));
window.addEventListener('keyup', (event) => piano.escutarTecla(event));