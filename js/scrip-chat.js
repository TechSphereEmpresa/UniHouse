// Ínicio: Sidebar (navegação entre as páginas) 
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {

    e.preventDefault()
// Impede o comportamento padrão do evento (o redirecionamento é impedido e usuário poderá controlar o comportamento de navegação manualmente) 
   
   this.parentElement.classList.toggle('active')
   // Alterna a visibilidade da sidebar 
})

document.addEventListener('click', function(e) {
// Quando houver um clique em qualquer parte da página verifica se o clique NÃO foi dentro do menu de perfil
   
   if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
// Se o clique for fora o menu fecha
        document.querySelector('.chat-sidebar-profile').classList.remove('active')
    }
})
// Fim: Sidebar (navegação entre as páginas) 


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