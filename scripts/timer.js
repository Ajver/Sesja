var isRunning = true;

var sec = 0;
var min = 0;
var hou = 0;

function setUpClock() {
    isRunning = true;
    sec = 0;
    min = 0;
    hou = 0;

    setTimeout("tick()", 1000);
}

function tick() {
    if(!isRunning) return;
    
    sec++;
    
    if(sec >= 60) {
        sec = 0;
        min++;
        
        if(min >= 60) {
            min = 0;
            hou++;
        }        
    }
    
    document.getElementById('clock').innerHTML = getClock();
    
    setTimeout("tick()", 1000);
}

function getClock() {
    var seconds = sec;
    var minutes = min;
    var hours = hou;
    
    if(sec < 10) seconds = '0'+sec;
    if(min < 10) minutes = '0'+min;
    if(hou < 10) hours = '0'+hou;
    
    return hours+':'+minutes+':'+seconds;
}

function stopClock() {
    isRunning = false;
    setTimeout(undefined, 0);
}