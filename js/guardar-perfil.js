document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const perfilSelecionado = document.querySelector('input[name="role"]:checked') ?
        document.querySelector('input[name="role"]:checked').value : null;

    console.log('Perfil selecionado:', perfilSelecionado);

    if (perfilSelecionado) {
        localStorage.setItem('perfilUsuario', perfilSelecionado);
        console.log('Perfil salvo no Local Storage:', perfilSelecionado);
    } else {
        console.warn('Nenhum perfil foi selecionado.');
    }

    window.location.href = '/pages/inicio/inicio.html';
});