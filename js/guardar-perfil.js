document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const perfilSelecionado = document.querySelector('input[name="role"]:checked') ?
        document.querySelector('input[name="role"]:checked').value : null;

    console.log('Perfil selecionado:', perfilSelecionado);

    if (perfilSelecionado) {
        localStorage.setItem('perfilUsuario', perfilSelecionado);
        console.log('Perfil salvo no Local Storage:', perfilSelecionado);

        if (perfilSelecionado === 'morador') {
            window.location.href = '/pages/login-cadastro/codigo-republica.html';
        } else if (perfilSelecionado === 'administrador') {
            window.location.href = '/pages/login-cadastro/planos.html';
        }
    } else {
        console.warn('Nenhum perfil foi selecionado.');
    }
});