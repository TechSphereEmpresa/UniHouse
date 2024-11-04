// Configuração padrão para estilizar o Chart.js com tema escuro
Chart.defaults.color = "#ffffff"; // Define o texto branco
Chart.defaults.font.family = "'Inter', sans-serif"; // Define a fonte
Chart.defaults.plugins.legend.labels.boxWidth = 12; // Define o tamanho da caixa da legenda
Chart.defaults.plugins.legend.labels.boxHeight = 12; // Define a altura da caixa da legenda

// Gráfico de Tarefas Concluídas (Rosca)
const ctxTarefasConcluidas = document
  .getElementById("graficoTarefasConcluidas")
  .getContext("2d");
const graficoTarefasConcluidas = new Chart(ctxTarefasConcluidas, {
  type: "doughnut",
  data: {
    labels: ["Lavar banheiro", "Lavar louça", "Limpar sala", "Jogar lixo fora"],
    datasets: [
      {
        data: [6, 12, 4, 30],
        backgroundColor: ["#264370", "#3C755A", "#F4A503", "#F56602"],
        borderColor: "#121212",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#FFFFFF",
          font: {
            size: 14,
          },
        },
      },
    },
  },
});

// Gráfico de Tarefas Atrasadas (Barras)
const ctxTarefasAtrasadas = document
  .getElementById("graficoTarefasAtrasadas")
  .getContext("2d");
const graficoTarefasAtrasadas = new Chart(ctxTarefasAtrasadas, {
  type: "bar",
  data: {
    labels: ["1", "2", "1", "2", "1"],
    datasets: [
      {
        label: "[Nome]",
        data: [1, 2, 1, 2, 1],
        backgroundColor: [
          "#264370",
          "#F4A503",
          "#3C755A",
          "#F56602",
          "#9747FF",
        ],
        borderRadius: 10, // Define o arredondamento das bordas
        borderSkipped: false, // Aplica o arredondamento em todas as bordas
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        barPercentage: 0.4, // Define a largura das barras
        categoryPercentage: 0.6, // Define o espaço entre as categorias
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          display: false, // Esconde os rótulos do eixo y
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Oculta a legenda
      },
    },
  },
});

// Gráfico de Despesas (Área)
const ctxDespesas = document.getElementById("graficoDespesas").getContext("2d");
const graficoDespesas = new Chart(ctxDespesas, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7"], // Representa dias ou semanas
    datasets: [
      {
        label: "Despesas",
        data: [120, 110, 270, 100, 300, 750, 400],
        borderColor: "#FFA500", // Cor da linha
        pointBackgroundColor: [
          "#E67D2E",
          "#E67D2E",
          "#E67D2E",
          "#E67D2E",
          "#E67D2E",
          "#FF0000",
          "#E67D2E",
        ], // Pontos com destaque
        backgroundColor: ctxDespesas.createLinearGradient(0, 0, 0, 400), // Gradiente
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          display: false, // Oculta os labels do eixo X
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          callback: function (value) {
            return "R$ " + value; // Formato de moeda
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Oculta a legenda
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return "R$ " + context.raw;
          },
        },
        backgroundColor: "#FFF",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#FF0000",
        borderWidth: 1,
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: 600,
            yMax: 600,
            borderColor: "red",
            borderWidth: 2,
            label: {
              content: "R$ 600",
              enabled: true,
              position: "end",
              backgroundColor: "#FF0000",
              color: "#FFF",
              padding: 5,
            },
          },
        },
      },
    },
  },
});

// Adicionar gradiente do amarelo ao preto
const gradient = ctxDespesas.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(255, 223, 0, 0.8)"); // Amarelo
gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)"); // Preto
graficoDespesas.data.datasets[0].backgroundColor = gradient;
graficoDespesas.update();
