const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-date"),
      prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Função para renderizar o calendário mensal
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                      && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

// Função para exibir apenas a semana atual
function showCurrentWeek() {
    const daysContainer = document.querySelector('.days');
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfWeek = new Date(currentYear, currentMonth, currentDay - currentDate.getDay());

    daysContainer.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const day = new Date(firstDayOfWeek);
        day.setDate(firstDayOfWeek.getDate() + i);
        
        const dayElement = document.createElement('li');
        dayElement.textContent = day.getDate();

        if (day.getDate() === currentDay) {
            dayElement.classList.add('active');
        }

        daysContainer.appendChild(dayElement);
    }
}

// Função para atualizar a data atual
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

// Chama a função para atualizar a data ao carregar a página
updateCurrentDate();

// Media query para verificar a largura da tela
const mediaQuery = window.matchMedia("(max-width: 600px)");

function handleMediaChange(event) {
    if (event.matches) {
        showCurrentWeek(); // Exibe o calendário semanal para telas menores
    } else {
        renderCalendar(); // Exibe o calendário mensal para telas maiores
    }
}

// Executa a função de acordo com a media query
handleMediaChange(mediaQuery);

// Adiciona ouvinte para mudanças na media query
mediaQuery.addListener(handleMediaChange);

// Funções para definir o mês e o ano
function setMonth(month) {
    currMonth = month;
    renderCalendar();
    closeDropdownMenu(); // Fecha o menu após selecionar
}

function setYear(year) {
    currYear = year;
    renderCalendar();
    closeDropdownMenu(); // Fecha o menu após selecionar
}

// Função para abrir/fechar o dropdown
document.getElementById("dropdownBtn").addEventListener("click", function() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Fechar o menu ao clicar fora
window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn')) {
        closeDropdownMenu();
    }
};

// Função para fechar o menu dropdown
function closeDropdownMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = "none";
}
