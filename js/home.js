document.addEventListener('DOMContentLoaded', function() {
    var bannerStatus = 1;
    var bannerTimer = 4000;
    
    window.onload = function() {
        bannerLoop();
    }
    
    var startBannerLoop = setInterval(function() {
        bannerLoop();
    }, bannerTimer);
    
    // Função para PARAR O LOOPING qnd o mouse estiver em cima
    document.getElementById('carrossel').onmouseenter = function() {
        clearInterval(startBannerLoop);
    }
    document.getElementById('carrossel').onmouseleave = function() {
        startBannerLoop = setInterval(function() {
        bannerLoop();
    }, bannerTimer);
    }
    
    // Fazer os botões de avançar e recuar funcionarem
    document.getElementById('imgbanbtn-next').onclick = function() {
        bannerLoop();
        
    }
    
    
    function bannerLoop() {
        if (bannerStatus === 1) {
            document.getElementById('imgban2').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('imgban1').style.right = '0px';
                document.getElementById('imgban1').style.zIndex = '1000';
    
                document.getElementById('imgban2').style.right = '-600px';
                document.getElementById('imgban2').style.zIndex = '1500';
    
                document.getElementById('imgban3').style.right = '600px';
                document.getElementById('imgban3').style.zIndex = '500';
            }, 500);
            setTimeout(function() {
                document.getElementById('imgban2').style.opacity = '1';
            }, 1000);
            bannerStatus =2;
    
        }
        else if (bannerStatus === 2) {
            document.getElementById('imgban3').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('imgban2').style.right = '0px';
                document.getElementById('imgban2').style.zIndex = '1000';
    
                document.getElementById('imgban3').style.right = '-600px';
                document.getElementById('imgban3').style.zIndex = '1500';
    
                document.getElementById('imgban1').style.right = '600px';
                document.getElementById('imgban1').style.zIndex = '500';
            }, 500);
            setTimeout(function() {
                document.getElementById('imgban3').style.opacity = '1';
            }, 1000);
            bannerStatus =3;
        }
    
        else if (bannerStatus === 3) {
            document.getElementById('imgban1').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('imgban3').style.right = '0px';
                document.getElementById('imgban3').style.zIndex = '1000';
    
                document.getElementById('imgban1').style.right = '-600px';
                document.getElementById('imgban1').style.zIndex = '1500';
    
                document.getElementById('imgban2').style.right = '600px';
                document.getElementById('imgban2').style.zIndex = '500';
            }, 500);
            setTimeout(function() {
                document.getElementById('imgban1').style.opacity = '1';
            }, 1000);
            bannerStatus =1;
        }
    
    }
    
    botao_nova_postagem = document.querySelector('.botao_nova_postagem')
    botao_novo_anuncio = document.querySelector('.botao_novo_anuncio')
    botao_add = document.querySelector('.botao_add')
    botao_add.addEventListener('click', function(){
        if (botao_nova_postagem.style.display == 'flex') {
            botao_nova_postagem.style.display = 'none'
        }

        else {
            botao_nova_postagem.style.display = 'flex'
        }

        if (botao_novo_anuncio.style.display == 'flex') {
            botao_novo_anuncio.style.display = 'none'
        }

        else {
            botao_novo_anuncio.style.display = 'flex'
        }
    })

})