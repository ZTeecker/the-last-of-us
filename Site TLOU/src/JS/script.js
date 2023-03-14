const btn = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

btn.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const btnSelecionado = document.querySelector('.selecionado')
        btnSelecionado.classList.remove('selecionado')

        botao.classList.add('selecionado')

        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa')
        
        imagens[indice].classList.add('ativa')
    })
})