export class Partitura {
  constructor() {
    this.noteGroups = [[[]]];
    this.container = document.querySelector('.principal__partitura');
  }

  adicionarNoteGroup() {
    this.noteGroups.push([[]]);

    const newNoteGroup = document.createElement('div');
    newNoteGroup.classList.add('partitura__grupo');

    const firstLine = document.createElement('div');
    firstLine.classList.add('partitura__linha');

    this.container.appendChild(newNoteGroup);
    newNoteGroup.appendChild(firstLine);
  }

  encontrarNumeroDaLinhaEGrupo(linha) {
    const referencias = {};
    const group = linha.parentNode;

    for (const indice in group.children) {
      if (Object.is(group.children[indice], linha)) {
        referencias.lineNumber = indice;
        break;
      }
    }

    for (const indice in group.parentNode.children) {
      if (Object.is(group.parentNode.children[indice], group)) {
        referencias.groupNumber = indice; 
        break;
      }
    }

    return referencias;
  }

  formatarNota(nota) {
    const aliasNotas = {
      'do': 'Dó',
      'do-sus': 'Dó#',
      're':'Ré',
      're-sus':'Ré#',
      'mi':'Mi',
      'fa':'Fá',
      'fa-sus':'Fá#',
      'sol':'Sol',
      'sol-sus':'Sol#',
      'la':'Lá',
      'la-sus':'Lá#',
      'si':'Si',
    }

    return aliasNotas[nota];
  }

  adicionarNota(texto) {
    if (typeof texto !== 'string') throw new Error('O nome da nota deve ser um string');
    
    const linha = document.querySelector('.partitura__linha--selected');
    if (!linha instanceof Element) return undefined;

    const { lineNumber, groupNumber } = this.encontrarNumeroDaLinhaEGrupo(linha);
    this.noteGroups[groupNumber][lineNumber].push(this.formatarNota(texto));
    
    const nota = document.createElement('input');
    nota.type = 'text';
    nota.classList.add('partitura__nota');
    nota.value = this.formatarNota(texto);
    linha.appendChild(nota);
  }
}