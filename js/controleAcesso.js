// Função para ajustar a navegação com base no perfil
function ajustarNavegacaoPorPerfil() {
    const perfil = localStorage.getItem('perfilUsuario');
  
    // Se o perfil não estiver definido, redireciona para login
    if (!perfil) {
      window.location.href = 'login.html';
      return;
    }
  
    // Exibir ou ocultar conteúdos específicos do administrador
    document.querySelectorAll('.funcao-admin').forEach(el => {
      el.style.display = (perfil === 'administrador') ? 'block' : 'none';
    });
  }
  
  // Chama a função ao carregar a página
  window.onload = ajustarNavegacaoPorPerfil;
  