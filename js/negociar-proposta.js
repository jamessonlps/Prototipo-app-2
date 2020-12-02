document.addEventListener('DOMContentLoaded', function() {

    let novoCache = document.querySelector('.cache')
    let motivos = document.querySelector('.motivos')
    
    
    let valor = localStorage.getItem('preco')
    valorAtual = document.querySelector('.valor-atual')
    valorAtual.innerHTML += valor + ',00'



    novoCache.addEventListener('input', function() {
        localStorage.setItem('novoCache', novoCache.value)
        atualizaSubmit()
    })
    motivos.addEventListener('input', function() {
        localStorage.setItem('motivos', motivos.value)
        atualizaSubmit()
    })



    function atualizaSubmit() {
        botao = document.querySelector('.enviar')

        if (novoCache.value != '' && 
        motivos.value != '') {
            botao.classList.remove('botao-off')
            botao.classList.add('botao-on')
            botao.setAttribute('href', './compromisso-agendado.html')
        }
    }
})