document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");

    if (!timerElement) {
        console.log("Timer topilmadi!");
        return;
    }

    let time = timerElement.textContent.trim();
    let parts = time.split(":");

    let minutes = parseInt(parts[0]);
    let seconds = parseInt(parts[1]);

    let totalSeconds = minutes * 60 + seconds;

    const countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            timerElement.textContent = "00:00";
            return;
        }

        totalSeconds--;

        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60;

        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        timerElement.textContent = `${min}:${sec}`;
    }, 1000);
});