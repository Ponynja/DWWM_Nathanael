var isRunning = false;

var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var chrono = document.getElementById("chrono");

var seconds100th = 0;


start.addEventListener("click", function() {
    if (!isRunning) {
        isRunning = true;
        chrono.classList.remove("pause");
        setTimeout(timer, 10);
    }
});

pause.addEventListener("click", function() {
    if (isRunning) {
        isRunning = false;
        chrono.classList.add("pause");
    }
});

reset.addEventListener("click", function() {
    isRunning = false;
    seconds100th = 0;
    chrono.classList.remove("pause");
    timerDisplay(0, 0, 0);
});

function timer() {

    if (isRunning) {
        console.log(seconds100th);
        seconds100th++;
        hms = millisecToHMS(seconds100th);
        timerDisplay(hms[0], hms[1], hms[2]);
        setTimeout(timer, 10);
    }
}

function millisecToHMS(totalSeconds100th) {

    totalSeconds = Math.floor(totalSeconds100th / 100);

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