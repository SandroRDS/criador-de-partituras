export class Piano {
  constructor(partitura) {
    this.timeoutAudios = {};
    this.audios = [];
    this.teclas = [];
    this.partitura = partitura;
    const audios = document.querySelectorAll('audio');
    const teclas = document.querySelectorAll('.tecla');
    audios.forEach((audio) => this.audios.push(audio));
    teclas.forEach((tecla) => this.teclas.push(tecla));

    teclas.forEach((tecla) => {
      tecla.addEventListener('mousedown', (event) => this.tocarTecla(event));
      tecla.addEventListener('mouseup', (event) => this.soltarTecla(event));
      tecla.addEventListener('mouseout', (event) => this.soltarTecla(event));
    });
  }

  tocarTecla({ target }) {
    const audioNota = this.audios.find(audio => audio.dataset.nota === target.dataset.nota);
    clearTimeout(this.timeoutAudios[audioNota.dataset.nota]);
    
    if(!audioNota.paused) audioNota.currentTime = 0;
    audioNota.play();
    target.classList.add('tecla--pressionada');

    this.partitura.adicionarNota(audioNota.dataset.nota);
  }

  soltarTecla({ target }) {
    const audioNota = this.audios.find(audio => audio.dataset.nota === target.dataset.nota);
    target.classList.remove('tecla--pressionada');
    this.timeoutAudios[audioNota.dataset.nota] = setTimeout(() => {
      audioNota.pause();
      audioNota.currentTime = 0;
    }, 1000);
  }

  escutarTecla(event) {
    const encontrarTecla = (nota) => this.teclas.find(tecla => tecla.dataset.nota === nota);
    const validarDigito = teclaEncontrada => document.activeElement.tagName === 'INPUT' || !teclaEncontrada;

    const teclasDisponiveis = {
      'q': encontrarTecla('do'),
      '2': encontrarTecla('do-sus'),
      'w': encontrarTecla('re'),
      '3': encontrarTecla('re-sus'),
      'e': encontrarTecla('mi'),
      'r': encontrarTecla('fa'),
      '5': encontrarTecla('fa-sus'),
      't': encontrarTecla('sol'),
      '6': encontrarTecla('sol-sus'),
      'y': encontrarTecla('la'),
      '7': encontrarTecla('la-sus'),
      'u': encontrarTecla('si'),
    }

    const teclaEncontrada = teclasDisponiveis[event.key];
    if (validarDigito(teclaEncontrada)) return undefined;

    console.log('Entrada válida para o piano');
    if (event.type === 'keydown') this.tocarTecla({ target: teclaEncontrada });
    else this.soltarTecla({ target: teclasDisponiveis[event.key] });
  }
}