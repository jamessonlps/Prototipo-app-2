document.addEventListener('DOMContentLoaded', function() {

    // busca informações do local storage
    // (ou base de dados, para os íntimos)
    let nome = localStorage.getItem('nome')
    // let email = localStorage.getItem('email')
    let estado = localStorage.getItem('estado')
    let cidade = localStorage.getItem('cidade')
    let endereco = localStorage.getItem('endereco')
    // let cep = localStorage.getItem('cep')
    let telefone = localStorage.getItem('telefone')
    // let cpf = localStorage.getItem('cpf')
    // let nascimento = localStorage.getItem('nascimento')
    // let agencia = localStorage.getItem('agencia')
    // let numeroConta = localStorage.getItem('numeroConta')
    // let banco = localStorage.getItem('banco')
    // let conta = localStorage.getItem('conta')
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