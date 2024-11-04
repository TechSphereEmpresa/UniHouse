const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let currentDate = new Date();

document.addEventListener('DOMContentLoaded', function () {
    const currentMonthYear = document.getElementById('current-month-year');
    const daysContainer = document.getElementById('days-container');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    function renderCalendar(date) {
        daysContainer.innerHTML = ""; // Limpa os dias do calendário
        const year = date.getFullYear();
        const month = date.getMonth();
        
        // Atualiza o mês e ano exibidos
        currentMonthYear.textContent = `${monthNames[month]} ${year}`;
        
        // Primeiro dia do mês
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        // Número total de dias no mês atual
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Preenche os dias em branco antes do primeiro dia do mês
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('empty-day');
            daysContainer.appendChild(emptyDay);
        }

        // Cria os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            dayElement.addEventListener('click', () => {
                document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
                dayElement.classList.add('selected');
            });
            daysContainer.appendChild(dayElement);

            // Marca o dia atual
            if (
                day === currentDate.getDate() &&
                month === currentDate.getMonth() &&
                year === currentDate.getFullYear()
            ) {
                dayElement.classList.add('today');
            }
        }
    }

    // Navegação entre os meses
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Renderiza o calendário inicialmente
    renderCalendar(currentDate);
});
