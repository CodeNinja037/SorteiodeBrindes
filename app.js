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
  nomeSorteadoElement.style.color = 'red';  // Garantindo a cor vermelha
  nomeSorteadoElement.style.fontWeight = 'bold'; // Garantindo o negrito
  
  // Adicionar a imagem correspondente se houver
  const imagemSorteada = document.getElementById('imagemSorteada');
  if (imagemSorteada) {
      const nomeImagem = nomeSorteado.trim().toLowerCase().replace(' ', '_') + '.png';
      imagemSorteada.src = `assets/${nomeImagem}`;
      imagemSorteada.style.display = 'block';
  }
}
