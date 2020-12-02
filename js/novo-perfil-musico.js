document.addEventListener('DOMContentLoaded', function() {


    let btnFotoPerfil = document.querySelector('.btn-1')
    let fotoPerfil = document.querySelector('.perfil')
    let fotoAterada = 0
    let detalhesMusico = document.querySelector('input[type=text]')
    
    // variáveis para controle de habilidades selecionadas
    let habilidades = document.querySelector('.habilidades')
    let habilidadesP = document.querySelector('.habilidadesP')
    let opcaoHabilidades = []
    
    // variáveis para controle de estilos selecionados
    let estilos = document.querySelector('.estilos')
    let estilosP = document.querySelector('.estilosP')
    let opcaoEstilos = []

    // variáveis para criação de tags na página
    let tagsHabil = document.querySelector('.tagsHabil')
    let tagsEstilo = document.querySelector('.tagsEstilo')


    // função que ativa botão quando os dados estão ok
    function atualizaSubmit() {
        botao = document.querySelector('.enviar')

        // verifica se itens obrigatórios estão ok
        if (fotoAterada == 1 && 
        opcaoHabilidades.length > 0 && 
        opcaoEstilos.length > 0 && 
        detalhesMusico.value != '') {
            // ativa botão
            botao.classList.remove('botao-off')
            botao.classList.add('botao-on')
            botao.setAttribute('href', './meu-perfil.html')
        }
    }


    // simula adição de foto de perfil ao clicar no botão
    btnFotoPerfil.addEventListener('click', function() {
        fotoPerfil.removeAttribute('src')
        fotoPerfil.setAttribute('src', '../img/fake-circular.png')
        fotoPerfil = fotoPerfil.getAttribute('src')
        localStorage.setItem('fotoPerfil', fotoPerfil)
        fotoAterada = 1
        atualizaSubmit()
    })


    // adiciona as opções de habilidades escolhidas pelo usuário
    habilidades.addEventListener('change', function() {
        // insere opção escolhida
        opcao = this.options[this.selectedIndex]
        opcaoHabilidades.push(opcao.text)
        // limpa lista para evitar repetição
        limpo = new Set(opcaoHabilidades)
        opcaoHabilidades = [...limpo]
        localStorage.setItem('listaHabil', opcaoHabilidades)
        // remove mensagem de que não há nada selecionado
        habilidadesP.innerHTML = ''

        // reseta set
        tagsHabil.innerHTML = ''
        for (p of opcaoHabilidades) {
            // cria tag
            novaTag = document.createElement('p')
            // adiciona conteúdo
            novaTag.innerHTML = p
            // adiciona classe das tags
            novaTag.classList.add('tag')
            // adiciona no campo próprio
            tagsHabil.appendChild(novaTag)
        }
        atualizaSubmit()
    })


    // adiciona as opções de estilos escolhidos pelo usuário
    estilos.addEventListener('change', function() {
        // insere opção escolhida
        opcao = this.options[this.selectedIndex]
        opcaoEstilos.push(opcao.text)
        // limpa lista para evitar repetição
        limpo = new Set(opcaoEstilos)
        opcaoEstilos = [...limpo]
        localStorage.setItem('listaEstilo', opcaoEstilos)
        // remove mensagem de que não há nada selecionado
        estilosP.innerHTML = ''

        // reseta set
        tagsEstilo.innerHTML = ''
        for (p of opcaoEstilos) {
            // cria tag
            novaTag = document.createElement('p')
            // adiciona conteúdo
            novaTag.innerHTML = p
            // adiciona classe das tags
            novaTag.classList.add('tag')
            // adiciona no campo próprio
            tagsEstilo.appendChild(novaTag)
        }
        atualizaSubmit()
    })

    // grava detalhes do músico
    detalhesMusico.addEventListener('input', function() {
        localStorage.setItem('detalhesMusico', detalhesMusico.value)
        atualizaSubmit()
    })

})