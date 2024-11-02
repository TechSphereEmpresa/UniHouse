function selectPrioridade(element) {
    document.querySelectorAll('.prioridade').forEach(prioridade => {
      prioridade.classList.remove('selected');
    });
    element.classList.add('selected');
  }

  function selectFrequencia(element) {
    document.querySelectorAll('.frequencia').forEach(frequencia => {
      frequencia.classList.remove('selected');
    });
    element.classList.add('selected');
  }

  function selectMorador(element) {
    document.querySelectorAll('.morador').forEach(morador => {
      morador.classList.remove('selected');
    });
    element.classList.add('selected');
  }