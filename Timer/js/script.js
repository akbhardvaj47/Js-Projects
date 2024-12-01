//Get elements from html code
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const clockTimer = document.querySelector('.clock-timer');

//Add event listener to each buttons
//Onclick startTimer, stopTimer and resetTimer function will execute
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

//Start msec, sec, min and hours from 0
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
//take a variable call null in which value can be assign at anytime
let timeInterval = null;


function startTimer(){
    timeInterval=setInterval(()=>{
        miliseconds++;
        if(miliseconds===100){
            miliseconds=0;
            seconds++;
        }
        if(seconds===60){
            minutes++;
            seconds=0;
        }
        if(minutes===60){
            hours++;
            minutes=0;
        }
        clockTimer.textContent = formatTime(hours, minutes, seconds, miliseconds);
    },10)
};


//stop timer
function stopTimer() {
    clearInterval(timeInterval);
  }  
//Reset timer at 00:00:00 and also stop at this position
function resetTimer() {
    clearInterval(timeInterval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clockTimer.textContent = '00:00:00:00';
  }

  // Helper function to format the time as HH:MM:SS
function formatTime(hours, minutes, seconds, miliseconds) {
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedmiliSeconds = miliseconds < (10 || 100) ? '0' + miliseconds : miliseconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedmiliSeconds}`;
}
  
  