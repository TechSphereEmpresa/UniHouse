// Gráfico de Tarefas Concluídas (Pizza)
const completedTasksCtx = document
  .getElementById("completedTasksChart")
  .getContext("2d");
const completedTasksChart = new Chart(completedTasksCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Lavar banheiros",
      "Lavar louça",
      "Limpar sala",
      "Jogar lixo fora",
    ],
    datasets: [
      {
        data: [4, 2, 6, 3],
        backgroundColor: ["#FFA500", "#FF4500", "#32CD32", "#1E90FF"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
        labels: { color: "#fff" },
      },
    },
  },
});

// Gráfico de Tarefas Atrasadas (Barra)
const delayedTasksCtx = document
  .getElementById("delayedTasksChart")
  .getContext("2d");
const delayedTasksChart = new Chart(delayedTasksCtx, {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Tarefas Atrasadas",
        data: [1, 1, 2, 1],
        backgroundColor: "#FFA500",
      },
    ],
  },
  options: {
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

// Gráfico de Despesas (Linha)
const expensesCtx = document.getElementById("expensesChart").getContext("2d");
const expensesChart = new Chart(expensesCtx, {
  type: "line",
  data: {
    labels: ["Conta de água", "Conta de energia", "Mercado", "Conserto de pia"],
    datasets: [
      {
        label: "Despesas",
        data: [120, 110, 270, 100],
        borderColor: "#FFA500",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        fill: true,
      },
    ],
  },
  options: {
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } },
    },
    plugins: {
      legend: { display: false },
    },
  },
});
