let timer = document.querySelector('.timer');
let time = localStorage.getItem('time');
let scores = [];





let intervalID = setInterval(function () {
    time--;
    timer.innerHTML = time;
    console.log(time);
    localStorage.setItem('time', time);
    score = time;
    localStorage.setItem('score', score);
    
    if (window.location.href == 'https://seth20smith.github.io/week4codequiz/highScore.html') {
        clearInterval(intervalID);
    }
}, 1000);

