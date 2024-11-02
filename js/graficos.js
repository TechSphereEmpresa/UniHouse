// Gráfico de Tarefas Concluídas (Pizza)
const tarefasConcluidasCtx = document
  .getElementById("graficoTarefasConcluidas")
  .getContext("2d");
const graficoTarefasConcluidas = new Chart(tarefasConcluidasCtx, {
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
const tarefasAtrasadasCtx = document
  .getElementById("graficoTarefasAtrasadas")
  .getContext("2d");
const graficoTarefasAtrasadas = new Chart(tarefasAtrasadasCtx, {
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
const despesasCtx = document.getElementById("graficoDespesas").getContext("2d");
const graficoDespesas = new Chart(despesasCtx, {
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
