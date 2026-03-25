document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");

    if (!timerElement) {
        console.log("Timer topilmadi!");
        return;
    }

    const time = timerElement.textContent.trim();
    const parts = time.split(":");

    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);

    if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
        console.log("Timer formati noto'g'ri!");
        return;
    }

    const initialTotalSeconds = minutes * 60 + seconds;
    let totalSeconds = initialTotalSeconds;

    const updateTimer = () => {
        const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const sec = String(totalSeconds % 60).padStart(2, "0");
        timerElement.textContent = `${min}:${sec}`;
    };

    updateTimer();

    setInterval(() => {
        if (totalSeconds <= 0) {
            totalSeconds = initialTotalSeconds;
        } else {
            totalSeconds--;
        }

        updateTimer();
    }, 1000);
});
