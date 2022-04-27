var txt = document.createElement('div')
txt.setAttribute('class', 'texto')
txt.textContent = 'Aqui vai a hora...'
txt.style.padding = '10px'
txt.style.textAlign = 'center'
txt.style.fontSize = '20px'

var section = document.querySelector('#section')
section.appendChild(txt)

function carregar(){
    var res = document.createElement('div')
    res.setAttribute('class', 'res')
    section.appendChild(res)
    res.style.display = 'flex'
    res.style.justifyContent = 'center'
    res.style.padding = '10px'
    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    img.setAttribute('src', './imagem/fotodia.png')
    res.appendChild(img)


    var data = new Date()
    var hrs = data.getHours()
    // var hrs = 18
    
    if(hrs < 12){
        img.src = './imagem/fotodia.png'
        document.body.style.backgroundColor = 'lightblue'
        txt.textContent = `São ${hrs} horas! Bom Dia! `  
    }
    else if( hrs >= 12 && hrs < 18){
        img.src = './imagem/fototarde.png'
        document.body.style.backgroundColor = 'chocolate'
        txt.textContent = `São ${hrs} horas! Boa Tarde! `
    }
    else{
        img.src = './imagem/fotonoite.png'
        document.body.style.backgroundColor = 'rgb(48, 47, 47)'
        txt.textContent = `São ${hrs} horas! Boa Noite! `
    }
}
