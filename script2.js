let timer = null;
let elapsedSeconds = 0;
function startTimer() {
    if (timer !== null) return;
    timer = setInterval(() => {
        elapsedSeconds++;
        updateDisplay();
    }, 1000); 
}
function pauseTimer() {
    clearInterval(timer);
    timer = null;
}
function resetTimer() {
    pauseTimer();
    elapsedSeconds = 0;
    updateDisplay();
    clearLaps();
}
function recordLap() {
    if (elapsedSeconds === 0) return;
    const lapsList = document.getElementById("laps");
    const lapItem = document.createElement("li");
    lapItem.textContent = formatTime(elapsedSeconds);
    lapsList.appendChild(lapItem);
}
function updateDisplay() {
    document.getElementById("time").textContent = formatTime(elapsedSeconds);
}
function clearLaps() {
    const lapsList = document.getElementById("laps");
    lapsList.innerHTML = "";
}
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}
