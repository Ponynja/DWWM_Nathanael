var isRunning = false;

var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var chrono = document.getElementById("chrono");

var seconds = 0;


start.addEventListener("click", function() {
    if (!isRunning) {
        isRunning = true;
        setTimeout(timer, 1000);
    }
});

pause.addEventListener("click", function() {
    if (isRunning) {
        isRunning = false;
    }
});

reset.addEventListener("click", function() {
    isRunning = false;
    seconds = 0;
    timerDisplay(0, 0, 0);
});

function timer() {

    if (isRunning) {
        seconds++;
        hms = secToHMS(seconds);
        timerDisplay(hms[0], hms[1], hms[2]);
        setTimeout(timer, 1000);
    }
}

function secToHMS(totalSeconds) {

    var hms = [];

    hms[0] = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    hms[1] = Math.floor(totalSeconds / 60);
    hms[2] = totalSeconds % 60;

    return hms;

}

function leadingZero(val) {

    if (val < 10) {
        return "0" + val;
    } else {
        return val;
    }
}

function timerDisplay(h, m, s) {
    chrono.innerHTML = leadingZero(h) + ":" + leadingZero(m) + ":" + leadingZero(s);
}