function currentTime(display) {
    setInterval(function () {
        var date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        display.textContent = date + ", " + h + ':' + m + ':' + s + " " + ampm;;
    }, 1000);
}

function formatAMPM(date) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var strTime = h + ':' + m + ':' + s + " " + ampm;
    return strTime;
}

function countDownTimer(display) {
    var timer = 85800, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10)
        minutes = parseInt(timer % 3600 / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        timer--;
    }, 1000);
}

function countUpTimer(display) {
    var timer = 600, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10)
        minutes = parseInt(timer % 3600 / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        timer++;
    }, 1000);
}

window.onload = function () {
    var countDownClock = document.getElementById('count-down-clock');
    var countUpClock = document.getElementById('count-up-clock');
    var date = document.getElementById('date');
    countDownTimer(countDownClock);
    countUpTimer(countUpClock);
    currentTime(date);
};