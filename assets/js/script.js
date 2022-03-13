let scoreText = document.querySelector('#Score');
let score;
// let timer = document.querySelector('.timer')
// let time = localStorage.getItem('time')
// let scores = []


// StartGame = () => {
//     time = 60
//     window.location = 'http://127.0.0.1:5500/week4codequiz/1stQuestion.html'
//     setInterval(function () {
//         time--
//         timer.innerHTML = time
//         console.log(time)
//         localStorage.setItem('time', time)
//         score = time
//         if (window.location == 'file:///Users/Smith1/Desktop/projects/Code%20Quiz%20Week%204/week4codequiz/highScore.html' || window.location == 'http://127.0.0.1:5500/week4codequiz/highScore.html'){
//             clearInterval()
//         }
//     }, 1000);
// }

storeScore = () => {
scores.push(document.getElementById('username')+': '+score)
localStorage.setItem(JSON.stringify('highscores'), scores)
}

if (window.location == 'http://127.0.0.1:5500/week4codequiz/HighestScores.html'){
    if(localStorage.getItem('highscores')){
        let highscores = JSON.parse(localStorage.getItem('highscores'))
    let highScoreList = document.querySelector('.highscore')
    
    for (let i = 0; i < highscores.length; i++) {
        highScoreList.appendChild(highscores[i]);
        
    }
    }
    
}