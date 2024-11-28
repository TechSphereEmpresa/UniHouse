const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

const responses = {
  "Oi": "Oi, em que posso ajudar?",
  "Qual são as suas funções": "Eu posso dar dicar de organização financeira ou doméstica.",
  "organização financeira": "Recomendo que você crie uma planilha com suas receitas e despesas.",
  "organização doméstica": "Uma dica é criar um cronograma semanal para tarefas domésticas.",
  "economizar dinheiro": "Evite gastos desnecessários e procure promoções antes de comprar.",
  "ajuda": "Posso ajudar com dicas de organização financeira ou doméstica. Pergunte algo específico!",
  "maga": " Letícia "
};

function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  // Exibir a mensagem do usuário
  appendMessage("user", userMessage);

  // Responder com base nas palavras-chave
  const botResponse = getBotResponse(userMessage);
  appendMessage("bot", botResponse);

  chatInput.value = "";
}

function appendMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll para o final
}

function getBotResponse(message) {
  for (let keyword in responses) {
    if (message.toLowerCase().includes(keyword)) {
      return responses[keyword];
    }
  }
  return "Desculpe, não entendi sua resposta. Tente novamente!";
}

sendButton.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

