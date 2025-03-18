let timer;
let isRunning = false;
let minutes = 0, seconds = 0, milliseconds = 0;
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsContainer = document.getElementById("laps");

function startPauseTimer() {
    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        startPauseBtn.textContent = "Pause";
        startPauseBtn.style.background = "#ffc107";
    } else {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
        startPauseBtn.style.background = "#28a745";
    }
    isRunning = !isRunning;
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = seconds = milliseconds = 0;
    document.getElementById("milliseconds").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    startPauseBtn.textContent = "Start";
    startPauseBtn.style.background = "#28a745";
    lapsContainer.innerHTML = "";
}

function recordLap() {
    if (!isRunning) return;
    const lapTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapsContainer.childElementCount + 1}: ${lapTime}`;
    lapsContainer.prepend(lapItem);
}

startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);
