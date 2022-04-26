var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var divNum = document.querySelector('.numeros')
var res = document.createElement('div')
res.setAttribute('id','res')

function somar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var s = n1+n2

        if(n1 || n2 < 0 || ''){
            res.innerHTML = 'Adicione um número válido'
        }
        else{
            res.innerHTML = `A soma dos números ${n1} + ${n2} é igual a = ${s}`
        }
}
divNum.appendChild(res)
console.log(divNum)