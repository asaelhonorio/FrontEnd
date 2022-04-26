var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var divNum = document.querySelector('.numeros')
var res = document.createElement('div')
res.setAttribute('id','res')

function somar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var s = n1+n2

        if(s < 0){
            window.alert('Digite números válidos!')
        }
        else{
            res.innerHTML = `A soma dos números ${n1} + ${n2} é igual a = ${s}`
        }
}
divNum.appendChild(res)

//TEXTO OCULTO
var item = document.querySelector('.item')

function show(id){
    let content = document.querySelector(id)
    content.classList.toggle('active')
}
