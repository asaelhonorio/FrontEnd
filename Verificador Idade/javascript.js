// document.body.style.backgroundColor = '#ac1903d7'
var section = document.querySelector('section')
section.style.backgroundColor = '#fff'
section.style.padding = '10px'
section.style.width = '500px'
section.style.margin = 'auto'
section.style.borderRadius = '20px'
section.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.400)'
section.style.fontSize = '1.2em'
section.style.position = 'relative'

// CRIANDO CONTEUDO LATERAL COM REDES SOCIAIS
var divSide = document.createElement('div')
divSide.setAttribute('class', 'lateral')
section.appendChild(divSide)
divSide.style.backgroundColor = 'white'
divSide.style.position = 'absolute'
divSide.style.top = '20px'
divSide.style.left = '-40px'
divSide.style.borderRadius = '15px'

var imgSide1 = document.createElement('img')
imgSide1.setAttribute('src', './imagens/github-p.png')
divSide.appendChild(imgSide1)

var imgSide2 = document.createElement('img')
imgSide2.setAttribute('src', './imagens/instagram-p.png')
divSide.appendChild(imgSide2)

var imgSide3 = document.createElement('img')
imgSide3.setAttribute('src', './imagens/facebook-p.png')
divSide.appendChild(imgSide3)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    
    if(txtano.value.length == 0 || txtano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var radsex = document.getElementsByName('radsex')
        var idade = ano - txtano.value
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(radsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', './imagens/bebe.png')
            }else if(idade < 20){
                // Jovem
                img.src = './imagens/jovemh.png'
            }else if(idade < 55){
                // Homem
                img.src = './imagens/homem.png'
            }else{
                // Idoso
                img.src = './imagens/idoso.png'
            }
        }else if(radsex[1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', './imagens/bebemulher.png')
            }else if(idade < 20){
                // Jovem
                img.src = './imagens/jovemm.png'
            }else if(idade < 55){
                // Homem
                img.src = './imagens/mulher.png'
            }else{
                // Idoso
                img.src = './imagens/idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.textContent = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}