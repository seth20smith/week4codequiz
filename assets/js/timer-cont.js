let timer = document.querySelector('.timer')
let time = localStorage.getItem('time')
let scores = []




   
    setInterval(function () {
        time--
        timer.innerHTML = time
        console.log(time)
        localStorage.setItem('time', time)
        score = time
        localStorage.setItem('score', score)
        if (window.location == 'https://seth20smith.github.io/week4codequiz/highScore.html'){
            clearInterval()
        }
    }, 1000);

