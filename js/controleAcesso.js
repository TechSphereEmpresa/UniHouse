function ajustarNavegacaoPorPerfil() {
    const perfil = localStorage.getItem('perfilUsuario');
  
    document.querySelectorAll('.funcao-admin').forEach(el => {
      el.style.display = (perfil === 'administrador') ? 'block' : 'none';
    });
  }
  
  window.onload = ajustarNavegacaoPorPerfil;
