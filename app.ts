time()

function time(){
    let currentTime = new Date()
    let timeHours:number = currentTime.getHours()
    let timeMinutes:number = currentTime.getMinutes()
    let timeSeconds:number = currentTime.getSeconds()

    let seconds:string
    let timeString:string

    if(timeSeconds < 10){
        seconds = `0${timeSeconds}`
        timeString = `${timeHours}:${timeMinutes}:${seconds}`
    }
    else{

        timeString = `${timeHours}:${timeMinutes}:${timeSeconds}`
    }

    document.querySelector('#currentTime').textContent = timeString
    setTimeout(time, 1000)

}