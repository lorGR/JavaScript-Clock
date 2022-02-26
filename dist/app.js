time();
function time() {
    var currentTime = new Date();
    var timeHours = currentTime.getHours();
    var timeMinutes = currentTime.getMinutes();
    var timeSeconds = currentTime.getSeconds();
    var seconds;
    var timeString;
    if (timeSeconds < 10) {
        seconds = "0" + timeSeconds;
        timeString = timeHours + ":" + timeMinutes + ":" + seconds;
    }
    else {
        timeString = timeHours + ":" + timeMinutes + ":" + timeSeconds;
    }
    document.querySelector('#currentTime').textContent = timeString;
    setTimeout(time, 1000);
}
