var txt = document.createElement('div')
txt.setAttribute('class', 'texto')
txt.textContent = 'Aqui vai a hora...'
txt.style.padding = '10px'
txt.style.textAlign = 'center'

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
}
