const botao = document.getElementById('botao');
const dotFuncao1 = document.getElementById('dotFuncao1');
const dotFuncao2 = document.getElementById('dotFuncao2');
const dotFuncao3 = document.getElementById('dotFuncao3');
let currentIndex = 1;
const imgRelatorio = document.getElementById('imgRelatorio');
const imgFinanceiro = document.getElementById('imgFinanceiro');
const imgOrganizacao = document.getElementById('imgOrganizacao');

botao.onclick = function () {
  if (currentIndex === 1) {
    dotFuncao1.classList.remove('active');
    dotFuncao2.classList.add('active');
    currentIndex++;

    imgRelatorio.classList.add('slide-out');
    imgFinanceiro.classList.add('aparecerImagem');
    setTimeout(() => {
      imgFinanceiro.classList.add('slide-in');
    }, 10);

    imgRelatorio.addEventListener('transitionend', () => {
      imgRelatorio.style.display = 'none';
    });

  } else {
    if (currentIndex === 2) {
      dotFuncao2.classList.remove('active');
      dotFuncao3.classList.add('active');
      currentIndex++;
      
      imgFinanceiro.classList.remove('imgHidden');
      imgFinanceiro.classList.add('imgVisible');
      imgFinanceiro.classList.add('slide-out');
      imgOrganizacao.classList.add('aparecerImagem');
      setTimeout(() => {
        imgOrganizacao.classList.add('slide-in');
      }, 10);
  
      imgRelatorio.addEventListener('transitionend', () => {
        imgRelatorio.style.display = 'none';
      });

    } else {
      window.location.href = '';
    }

  }
};