let sec = document.getElementById("secs");
let min = document.getElementById("mins");
let hr = document.getElementById("hrs");

let playBtn = document.getElementById("playBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

playBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  hr.innerHTML = "00:";
  min.innerHTML = "00:";
  sec.innerHTML = "00";
});

const startTimer = () => {
  seconds++;
  if (seconds <= 9) {
    sec.innerHTML = "0" + seconds;
  } else {
    sec.innerHTML = seconds;
  }

  if (seconds > 59) {
    seconds = 0;
    minutes++;
    if (minutes <= 9) {
      min.innerHTML = "0" + minutes + ":";
    } else {
      min.innerHTML = minutes + ":";
    }
  }

  if (minutes > 59) {
    minutes = 0;
    hours++;
    if (hours <= 9) {
      hr.innerHTML = "0" + hours + ":";
    } else {
      hr.innerHTML = hours + ":";
    }
  }
};
