// ínicio: Conversation (Conversas) 

document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        if(this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active')
        } else {
            document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                i.classList.remove('active')
            })
            this.parentElement.classList.add('active')
        }
    })
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
            i.classList.remove('active')
        })
    }
})

document.querySelectorAll('.conversation-form-input').forEach(function(item) {
    // Ajuste de altura do input com base no conteúdo
    item.addEventListener('input', function() {
        this.rows = this.value.split('\n').length
    })
    
    // Envio de mensagem ao pressionar Enter
    item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) { // Detecta Enter sem Shift
            e.preventDefault(); // Evita uma nova linha
            // Lógica de envio de mensagem
            const message = this.value.trim();
            if (message) {
                // Adicione aqui a lógica para enviar a mensagem
                console.log('Mensagem enviada:', message);
                this.value = ''; // Limpa o campo de input após o envio
                this.rows = 1;   // Reseta o número de linhas do input
            }
        }
    });
})

// Ao selecionar uma conversa ir a ela
document.querySelectorAll('[data-conversation]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active')
        })
        document.querySelector(this.dataset.conversation).classList.add('active')
    })
})

document.querySelectorAll('.conversation-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversation').classList.remove('active')
        document.querySelector('.conversation-default').classList.add('active')
    })
})



//Fim: Conversation (Conversas) 

document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const messageList = document.getElementById("message-list");

    // Função para adicionar uma mensagem do usuário
    function addMessage() {
        const messageText = messageInput.value.trim(); // Remove espaços desnecessários
        if (messageText !== "") {
            // Criar o elemento da mensagem
            const messageItem = document.createElement("li");
            messageItem.classList.add("conversation-item", "conversation-item-me");
            messageItem.innerHTML = `
                <div class="conversation-item-content">
                    <div class="conversation-item-wrapper">
                        <div class="conversation-item-box">
                            <div class="conversation-item-text">
                                <p>${messageText}</p>
                                <div class="conversation-item-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Adicionar a mensagem à lista
            messageList.appendChild(messageItem);

            // Rolagem automática para a última mensagem
            messageList.scrollTop = messageList.scrollHeight;

            // Limpar o campo de entrada
            messageInput.value = "";
        }
    }

    // Evento de clique no botão "Enviar"
    sendButton.addEventListener("click", addMessage);

    // Permitir envio com Enter
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Previne quebra de linha
            addMessage();
        }
    });
});