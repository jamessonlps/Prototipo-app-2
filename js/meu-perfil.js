document.addEventListener('DOMContentLoaded', function() {

    let nome = localStorage.getItem('nome')

    let estado = localStorage.getItem('estado')
    let cidade = localStorage.getItem('cidade')
    let endereco = localStorage.getItem('endereco')

    let telefone = localStorage.getItem('telefone')

    let fotoPerfil = localStorage.getItem('fotoPerfil')
    let habilidades = localStorage.getItem('listaHabil')
    let estilos = localStorage.getItem('listaEstilo')
    let detalhes = localStorage.getItem('detalhesMusico')

    // div's que contém as tags
    let habilContainer = document.querySelector('.habilidades')
    let estiloContainer = document.querySelector('.estilos')

    console.log(habilidades.split(','))

    // atualiza foto
    foto = document.querySelector('.foto')
    foto.removeAttribute('src')
    foto.setAttribute('src', fotoPerfil)

    // atualiza nome
    nomePerfil = document.querySelector('.nome')
    nomePerfil.innerHTML = nome

    // atualiza endereço
    enderecoPerfil = document.querySelector('.endereco')
    enderecoPerfil.innerHTML = cidade + ' - ' + estado.toUpperCase() + ', ' + endereco

    // atualiza telefone
    numero = document.querySelector('.telefone')
    numero.innerHTML = telefone

    // adiciona tags de habilidade
    for (habilidade of habilidades.split(',')) {
        novaTag = document.createElement('p')
        novaTag.innerHTML = habilidade
        novaTag.classList.add('tag')
        habilContainer.appendChild(novaTag)
    }

    // adiciona tags de estilo
    for (estilo of estilos.split(',')) {
        novaTag = document.createElement('p')
        novaTag.innerHTML = estilo
        novaTag.classList.add('tag')
        estiloContainer.appendChild(novaTag)
    }

    // atualiza descrição
    descricao = document.querySelector('.p-texto')
    descricao.innerHTML = detalhes


    

})