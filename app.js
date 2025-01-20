function sortear() {
  // Pegar os nomes da textarea e separar por linha
  const nomes = document.getElementById('nomes').value.split('\n');
  
  // Filtrar nomes vazios
  const nomesFiltrados = nomes.filter(nome => nome.trim() !== '');
  
  // Gerar um índice aleatório para sortear um nome da lista
  const indiceSorteado = Math.floor(Math.random() * nomesFiltrados.length);
  
  // Mostrar o nome sorteado no parágrafo
  const nomeSorteado = nomesFiltrados[indiceSorteado];
  const nomeSorteadoElement = document.getElementById('nomeSorteado');
  nomeSorteadoElement.innerText = nomeSorteado;
  nomeSorteadoElement.style.display = 'block';
  
  // Adicionar a imagem correspondente se houver
  const imagemSorteada = document.getElementById('imagemSorteada');
  if (imagemSorteada) {
      imagemSorteada.style.display = 'block';
  }
}
