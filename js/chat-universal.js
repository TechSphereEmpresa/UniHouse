document.querySelectorAll('.conversa-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        if(this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active')
        } else {
            document.querySelectorAll('.conversa-item-dropdown').forEach(function(i) {
                i.classList.remove('active')
            })
            this.parentElement.classList.add('active')
        }
    })
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.conversa-item-dropdown, .conversa-item-dropdown *')) {
        document.querySelectorAll('.conversa-item-dropdown').forEach(function(i) {
            i.classList.remove('active')
        })
    }
})

document.querySelectorAll('.conversa-form-input').forEach(function(item) {
    // Ajuste de altura do input com base no conteúdo
    item.addEventListener('input', function() {
        this.rows = this.value.split('\n').length
    })
    
    // Envio de mensagem ao pressionar Enter -- está errado 
    item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) { // Detecta Enter sem Shift
            e.preventDefault(); // Evita uma nova linha
            // Lógica de envio de mensagem
            const mensagem = this.value.trim();
            if (mensagem) {
                // Adicione aqui a lógica para enviar a mensagem
                console.log('Mensagem enviada:', mensagem);
                this.value = ''; // Limpa o campo de input após o envio
                this.rows = 1;   // Reseta o número de linhas do input
            }
        }
    });
})

// Ao selecionar uma conversa ir a ela
document.querySelectorAll('[data-conversa]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('.conversa').forEach(function(i) {
            i.classList.remove('active')
        })
        document.querySelector(this.dataset.conversa).classList.add('active')
    })
})

document.querySelectorAll('.conversa-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversa').classList.remove('active')
        document.querySelector('.conversa-default').classList.add('active')
    })
})



//Fim: conversa (Conversas) 