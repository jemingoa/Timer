// Variables
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// DOM Elements
const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Function to update timer display
function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${h}:${m}:${s}`;
}

// Start Timer
startBtn.addEventListener("click", function () {

    if (timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(function () {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

    statusDisplay.textContent = "Running";
});

// Pause Timer
pauseBtn.addEventListener("click", function () {

    clearInterval(timer);

    statusDisplay.textContent = "Paused";
});

// Reset Timer
resetBtn.addEventListener("click", function () {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    statusDisplay.textContent = "Reset";
});

// Keyboard Shortcuts
document.addEventListener("keydown", function (event) {

    // Start with S key
    if (event.key === "s" || event.key === "S") {
        startBtn.click();
    }

    // Pause with P key
    if (event.key === "p" || event.key === "P") {
        pauseBtn.click();
    }

    // Reset with R key
    if (event.key === "r" || event.key === "R") {
        resetBtn.click();
    }
});

// Initialize Display
updateDisplay();