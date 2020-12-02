document.addEventListener('DOMContentLoaded', function() {

    let cidadeServico = document.querySelector('.cidades')
    let opcaoCidade

    let dataAnuncio = document.querySelector('.dia')
    let horaInicio = document.querySelector('.horaInicio')
    let horaFinal = document.querySelector('.horaFinal')
    let preco = document.querySelector('.valor')
    
    
    // detecta mudanças e chama função que verifica 
    // preenchimento de dados
    cidadeServico.addEventListener('change', function() {
        opcaoCidade = this.options[this.selectedIndex]
        localStorage.setItem('cidadeServico', opcaoCidade.text)
        atualizaSubmit()
    })
    dataAnuncio.addEventListener('input', function() {
        localStorage.setItem('dataAnuncio', dataAnuncio.value)
        atualizaSubmit()
    })
    horaInicio.addEventListener('input', function() {
        localStorage.setItem('horaInicio', horaInicio.value)
        atualizaSubmit()
    })
    horaFinal.addEventListener('input', function() {
        localStorage.setItem('horaFinal', horaFinal.value)
        atualizaSubmit()
    })
    preco.addEventListener('input', function() {
        localStorage.setItem('preco', preco.value)
        atualizaSubmit()
    })


    // verifica se todos os dados foram preenchidos
    function atualizaSubmit() {
        botao = document.querySelector('.botao')

        if (opcaoCidade.text != '' && 
        dataAnuncio.value != '' && 
        horaInicio.value != '' && 
        horaFinal.value != '' && 
        preco.value != '') {
            // ativa botão
            botao.classList.remove('botao-off')
            botao.classList.add('botao-on')
            botao.setAttribute('href', './popup-nova-oferta.html')
        }

    }

})