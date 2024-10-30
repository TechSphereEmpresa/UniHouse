function selectOption(element) {
    document.querySelectorAll('.opcao').forEach(opcao => {
        opcao.classList.remove('selected');
    });
    element.classList.add('selected');
  }

  function selectPerson(element) {
    document.querySelectorAll('.person').forEach(person => {
      person.classList.remove('selected');
    });
    element.classList.add('selected');
  }