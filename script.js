let seconds = 0;
let centiseconds = 0;
let spanSeconds = document.getElementById('seconds');
let spanCentiseconds = document.getElementById('centiseconds');
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let interval;

buttonStart.onclick = function() {
  interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
  clearInterval(interval);
}

buttonReset.onclick = function() {
  clearInterval(interval);
  centiseconds = 0;
  seconds = 0;
  spanCentiseconds.innerText = '00';
  spanSeconds.innerText = '00';
}

function startTimer() {
  centiseconds++;
  if(centiseconds <= 9)  spanCentiseconds.innerText = '0' + centiseconds;
  else spanCentiseconds.innerText = centiseconds;

  if(centiseconds > 99) {
    seconds++;
    if(seconds <= 9) spanSeconds.innerText = '0' + seconds;
    else spanSeconds.innerText = seconds;
    centiseconds = 0;
    spanCentiseconds.innerText = '00';
  }
}