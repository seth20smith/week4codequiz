let timer = document.querySelector('.timer')
let time = localStorage.getItem('time')
let scores = []


StartGame = () => {
    time = 60
    setInterval(function () {
        time--
        timer.innerHTML = time
        console.log(time)
        localStorage.setItem('time', time)
        score = time
        if (window.location == 'https://seth20smith.github.io/week4codequiz/highScore.html' ){
            clearInterval()
        }
    }, 1000);
}
StartGame()