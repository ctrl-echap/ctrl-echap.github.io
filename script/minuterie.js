/*Sources pour le minuteur:
1. https://www.digitalocean.com/community/tutorials/js-building-countdown-timer?utm_source=.com#step-3-formatting-to-days-hours-minutes-and-seconds
2. https://www.developerdrive.com/build-countdown-timer-pure-javascript/?utm_source=t.com
*/

// On définit le temps maximale comme étant de 30 minutes
let totalTime = 30 * 60; 

// On définit la fonction qui commence minuterie
function startTimer() {
    let time = sessionStorage.getItem("remainingTime");
    if (time === null) {
        time = totalTime;
        sessionStorage.setItem("remainingTime", time);
    } else {
        time = parseInt(time);
    }

    const timerDisplay = document.getElementById("game-timer");

    // On crée une fonction pour faire la mise à jour de la minuterie à la minute et la seconde précise
    function updateTimer() {
        if (!timerDisplay) return;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60; 
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;
        sessionStorage.setItem("remainingTime", time);

        // On met la condition d'arrêt du jeu si la minuterie frappe 0 secondes restants
        if (time < 0) {
            clearInterval(timerInterval);
            window.location.href = "pagefin2.html"; 
        }
    }

    // On définit l'intervalle de temps pour rappeler l'utilisateur du temps qu'il lui reste
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}
