let timer = document.querySelector('.timer')
let time = localStorage.getItem('time') || 60;
// let scores = []

let answerButtons = document.querySelectorAll('button');
answerButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // If the answer is wrong, subtract 5 seconds from the time
        if (button.classList.contains('wrong')) {
            time = Math.max(0, time - 5);
        }
    });
});

StartGame = () => {
    time = 60
    setInterval(function () {
        time--;
        timer.innerHTML = time;
        console.log(time)
        localStorage.setItem('time', time);
        score = time
        if (time <= 0 || window.location === 'https://seth20smith.github.io/week4codequiz/highScore.html' ) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
StartGame()