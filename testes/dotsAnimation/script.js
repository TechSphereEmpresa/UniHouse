function updateCurrentDate() {
    const currentDateElement = document.getElementById('monthYear');
    const date = new Date();
    
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
  
    const currentMonth = monthNames[date.getMonth()];
    const currentYear = date.getFullYear();
  
    currentDateElement.textContent = `${currentMonth} ${currentYear}`;
  }
  
  // Chama a função ao carregar a página
  updateCurrentDate();
  

function showCurrentWeek() {
    const daysContainer = document.querySelector('.days');
    const currentDate = new Date(); // Data atual
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Obter o dia da semana do primeiro dia da semana vigente
    const firstDayOfWeek = new Date(currentYear, currentMonth, currentDay - currentDate.getDay());
    
    // Limpa os dias anteriores
    daysContainer.innerHTML = '';
  
    // Exibe apenas os 7 dias da semana atual
    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDayOfWeek);
      day.setDate(firstDayOfWeek.getDate() + i);
      
      const dayElement = document.createElement('li');
      dayElement.textContent = day.getDate();
  
      // Adiciona a classe 'active' para o dia atual
      if (day.getDate() === currentDay) {
        dayElement.classList.add('active');
      }
  
      daysContainer.appendChild(dayElement);
    }
  }
  
  // Chamar a função para exibir a semana atual ao carregar a página
  showCurrentWeek();
  