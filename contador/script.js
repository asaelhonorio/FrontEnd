var btn1 = document.querySelector('.increase')
var btn2 = document.querySelector('.decrease')
var btn3 = document.querySelector('.reset')
var p = document.querySelector('#num')

var cont = 0

btn1.addEventListener('click', function(){
    p.innerHTML = ++cont
})

btn2.addEventListener('click' , function(){
    p.innerHTML = --cont
})

btn3.addEventListener('click', function(){
    p.innerHTML = cont = 0
})
