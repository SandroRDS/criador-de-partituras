class Partitura {
  constructor() {
    this.noteGroups = [];
    this.container = document.querySelector('.principal__partitura');
  }

  adicionarNoteGroup() {
    this.noteGroups.push([]);

    const newNoteGroup = document.createElement('div');
    newNoteGroup.classList.add('.partitura__grupo');
    this.container
  }

  encontrarLinhaSelecionada() {
    return document.querySelector('.partitura__linha--selected');
  }

  adicionarNota(texto) {

  }
}