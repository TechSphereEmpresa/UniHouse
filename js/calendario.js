const mediaQuery = window.matchMedia("(max-width: 1100px)");

function handleMediaChange(event) {
    if (event.matches) {
        showCurrentWeek(); 
    } else {
        renderCalendar(); 
    }
}

handleMediaChange(mediaQuery);

mediaQuery.addListener(handleMediaChange);

function renderCalendar() {
    const daysTag = document.querySelector(".days"),
          currentDate = document.querySelector(".current-date"),
          prevNextIcon = document.querySelectorAll(".icons span");

    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

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

updateCurrentDate();
