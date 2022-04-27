function relogio(){
    var temp = document.querySelector('.temp')
    var data = document.querySelector('.data')
    var am_pm = document.querySelector('.am_pm')

    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = String(date.getSeconds()).padStart(2, '0')

    var day = String(date.getDate() + 1).padStart(2, '0')
    var month = String(date.getMonth() + 1).padStart(2, '0')
    var year = date.getFullYear()
    var dma = `${day} / ${month} / ${year}`

    var relogioTela = `${hour} : ${min} : ${sec}` 

    
    temp.innerHTML = relogioTela
    data.innerHTML = dma

    am_pm.style.cssText = 'font-size: 20px; color: white; font-family: sans-serif; '

    if(hour < 12){
        am_pm.innerHTML = 'AM'
    }else{
        am_pm.innerHTML = 'PM'
    }
}
setInterval(relogio, 1000)