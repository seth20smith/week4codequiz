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
        if (window.location == 'file:///Users/Smith1/Desktop/projects/Code%20Quiz%20Week%204/week4codequiz/highScore.html' || window.location == 'http://127.0.0.1:5500/week4codequiz/highScore.html'){
            clearInterval()
        }
    }, 1000);

