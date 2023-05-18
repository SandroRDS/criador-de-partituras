import { Piano } from './Piano.js';
import { Partitura } from './Partitura.js';

const partitura = new Partitura();
const piano = new Piano(partitura);
window.addEventListener('keydown', (event) => piano.escutarTecla(event));
window.addEventListener('keyup', (event) => piano.escutarTecla(event));

const botaoBaixar = document.querySelector('.principal__botao_baixar');
botaoBaixar.addEventListener('click', () => window.print());