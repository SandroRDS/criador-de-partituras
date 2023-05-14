const linhas = document.querySelectorAll('.partitura__linha');

const selecionarLinha = (target) => {
  const linhaSelecionadaAnterior = document.querySelector('.partitura__linha--selected');
  target.classList.add('partitura__linha--selected');
  linhaSelecionadaAnterior?.classList?.remove('partitura__linha--selected');
};

linhas.forEach(linha => linha.addEventListener('click', () => selecionarLinha(linha)));