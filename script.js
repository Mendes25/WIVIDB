const botaoAlterarTema = document.getElementById('botao-alterar-tema')

const body = document.querySelector('body')

const imagemBotaoTrocaDeTema = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute('src', 'img/sun.svg')
  } else {
    imagemBotaoTrocaDeTema.setAttribute('src', 'img/moon.svg')
  }
})