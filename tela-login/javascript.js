var h3 = document.querySelector('h3')
h3.style.cssText = 'color: white; padding-bottom: 10px'


function validation(){
    var email = document.querySelector('#email').value
    var form = document.querySelector('#form')
    var txt = document.querySelector('#text')
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(email.match(pattern)){
        form.classList.add('valido')
        form.classList.remove('invalido')
        txt.textContent = 'Seu endereço de Email é válido.'
        txt.style.color = '#00ff00'

    }else{
        form.classList.remove('valido')
        form.classList.add('invalido')
        txt.textContent = 'Seu endereço de Email é inválido.'
        txt.style.color = '#ff0000'
    }
    if(email == ''){
        form.classList.remove('valid')
        form.classList.remove('invalid')
        txt.textContent = ''
    }
}

