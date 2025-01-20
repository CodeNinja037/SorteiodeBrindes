function sortear() {
  // Mostrar botão de aguarde
  const aguardeButton = document.getElementById('aguarde');
  aguardeButton.style.display = 'block';

  // Pegar os nomes da textarea e separar por linha
  const nomes = document.getElementById('nomes').value.split('\n');
  
  // Filtrar nomes vazios
  const nomesFiltrados = nomes.filter(nome => nome.trim() !== '');
  
  // Gerar um índice aleatório para sortear um nome da lista
  const indiceSorteado = Math.floor(Math.random() * nomesFiltrados.length);
  
  // Pausar por 5 segundos para suspense
  setTimeout(() => {
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
      
      // Função de síntese de voz
      const msg = new SpeechSynthesisUtterance(nomeSorteado);
      msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Google português do Brasil Male') || voice.name.includes('Microsoft')) || speechSynthesis.getVoices()[0];
      speechSynthesis.speak(msg);

      // Esconder botão de aguarde
      aguardeButton.style.display = 'none';
  }, 5000); // 5 segundos
}
