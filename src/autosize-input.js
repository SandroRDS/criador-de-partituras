const nomePartitura = document.querySelector('.principal__nome_partitura');

const resizeInput = () => {
  const tamanho = nomePartitura.value.length;
  nomePartitura.style.width = `${tamanho + 1}ch`;
}

nomePartitura.addEventListener('input', resizeInput);