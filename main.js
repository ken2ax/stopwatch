const stopWatch = document.getElementById("stopwatch");
const startButton = document.getElementById("startbutton");
const stopButton = document.getElementById("stopbutton");
const resetButton = document.getElementById("resetbutton");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let time = () => {
    milliseconds ++;
    if (milliseconds % 100 === 0){
        seconds++;
        milliseconds = 0;
        if (seconds % 60 === 0){
            minutes++;
            seconds = 0;
            if(minutes % 60 ===0){
                hours++;
                minutes = 0;
            }
        }
    }
    stopWatch.textContent = ('00' + hours).slice(-2)+':'+('00' + minutes).slice(-2)+':'+('00' + seconds).slice(-2)+'.'+('00' + milliseconds).slice(-2);
}

let interval;

startButton.addEventListener('click', () =>{
    interval = setInterval(time,10);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    console.log("start");
});

stopButton.addEventListener('click', () =>{
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    console.log("stop");
});

resetButton.addEventListener('click', () =>{
    stopWatch.textContent = '00:00:00.00';
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    console.log("reset");
});