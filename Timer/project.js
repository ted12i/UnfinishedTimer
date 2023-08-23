const startStopBtn = document.querySelector('#startStopBtn');
const resetbtn = document.querySelector('#reset-btn');
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

// interval and status variables
let timeInterval = null;
let timerStatus = "stopped";

// stopwatch
const stopwatch = () => {
    seconds++;
    if(seconds / 60 === 1){
        minutes++;
        seconds=0;

        if(minutes / 60 === 1){
            hours++;
            minutes = 0;
        }
    }
    if(seconds < 10){
        leadingseconds = "0" + seconds.toString();
    }else{
        leadingseconds = seconds;
    }
    if(minutes < 10){
        leadingminutes = "0" + minutes.toString();
    }else{
        leadingminutes = minutes;
    }
    if(hours < 10){
        leadinghours = "0" + hours.toString();
    }else{
        leadinghours = hours;
    }
    let displayTimer = document.getElementById('timer');
    displayTimer.innerText = leadinghours + " : " + leadingminutes + " : " + leadingseconds;
}


startStopBtn.addEventListener('click',()=>{
    if(timerStatus === "stopped"){
    timeInterval = window.setInterval(stopwatch,1000);
    document.getElementById('startStopBtn').innerHTML = '<i class= "fa-solid fa-pause" id="pause"><i/>';
    timerStatus = "started";
    }else {
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = 
        '<i class= "fa-solid fa-play" id="play"><i/>';
        timerStatus = "stopped";
    }
});