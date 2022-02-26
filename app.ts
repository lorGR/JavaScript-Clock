const form = document.querySelector('form')

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

function changeTheme(form, error){
    error.preventDefault()
    form = document.querySelector('form')
    const brightTheme = (form.elements[0])

    if(brightTheme.checked){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }else{
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
}

form.addEventListener('change', (e)=> {
    changeTheme(form, e)
})