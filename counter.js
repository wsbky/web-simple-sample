function loadJs() {
    const counterLabel = document.getElementById("counterLabel");
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const resetButton = document.getElementById("resetButton");
    var count;

    function init() {
        count = 0;
        counterLabel.innerHTML = "0";
    }

    function countUp() {
        count += 1;
        counterLabel.innerHTML = String(count);
    }
    function countDown() {
        count -= 1;
        counterLabel.innerHTML = String(count);
    }
    function countReset() {
        count = 0;
        counterLabel.innerHTML = String(count);
    }

    init();

    upButton.addEventListener("click", countUp);
    downButton.addEventListener("click", countDown);
    resetButton.addEventListener("click", countReset);

    console.log("[log] counter.js loaded");
}

document.addEventListener("DOMContentLoaded", loadJs);
