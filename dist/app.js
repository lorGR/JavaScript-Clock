var form = document.querySelector('form');
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
function changeTheme(form, error) {
    error.preventDefault();
    form = document.querySelector('form');
    var brightTheme = (form.elements[0]);
    if (brightTheme.checked) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}
form.addEventListener('change', function (e) {
    changeTheme(form, e);
});
