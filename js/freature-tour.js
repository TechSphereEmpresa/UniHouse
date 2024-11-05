const botao = document.getElementById('botao');
const dots = document.querySelectorAll('.dot');
const imagens = [document.getElementById('imgOrganizacao'), document.getElementById('imgFinanceiro'), document.getElementById('imgRelatorio')];
const funcoes = [document.getElementById('funcaoOrganizacao'), document.getElementById('funcaoFinanceiro'), document.getElementById('funcaoRelatorio')];
const descricoes = [document.getElementById('funcaoOrganizacaoDescricao'), document.getElementById('funcaoFinanceiroDescricao'), document.getElementById('funcaoRelatorioDescricao')];

let currentIndex = 0;

botao.onclick = function () {
    if (currentIndex < 2) {
        alternarVisibilidade(currentIndex, currentIndex + 1);
        currentIndex++;
  } else {
    window.location.href = '/pages/login-cadastro/login-inicial.html'; 
  }
};

function alternarVisibilidade(indexAtual, proximoIndex) {
  dots[indexAtual].classList.remove('active');
  dots[proximoIndex].classList.add('active');

  imagens[indexAtual].classList.remove('slide-in');
  funcoes[indexAtual].classList.remove('slide-in');
  descricoes[indexAtual].classList.remove('slide-in');

  imagens[indexAtual].classList.add('slide-out');
  funcoes[indexAtual].classList.add('slide-out');
  descricoes[indexAtual].classList.add('slide-out');

  imagens[indexAtual].addEventListener('transitionend', () => {
    imagens[indexAtual].style.display = 'none';
    funcoes[indexAtual].style.display = 'none';
    descricoes[indexAtual].style.display = 'none';
    
    imagens[proximoIndex].classList.remove('hidden');
    funcoes[proximoIndex].classList.remove('hidden');
    descricoes[proximoIndex].classList.remove('hidden');

    imagens[proximoIndex].classList.add('aparecer');
    funcoes[proximoIndex].classList.add('aparecer');
    descricoes[proximoIndex].classList.add('aparecer');
    
    setTimeout(() => {
      imagens[proximoIndex].classList.add('slide-in');
      funcoes[proximoIndex].classList.add('slide-in');
      descricoes[proximoIndex].classList.add('slide-in');
    }, 10);
});
}