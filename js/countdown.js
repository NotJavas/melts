function updateClock() {
    const targetDate = new Date('2026-04-16T00:00:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('clock').innerHTML = '00 Days, 00 Hours, 00 Min, 00 Sec';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('clock').innerHTML = 
        `${days.toString().padStart(2, '0')} Days, ` +
        `${hours.toString().padStart(2, '0')} Hours, ` +
        `${minutes.toString().padStart(2, '0')} Min, ` +
        `${seconds.toString().padStart(2, '0')} Sec`;
}

setInterval(updateClock, 1000);
updateClock();
