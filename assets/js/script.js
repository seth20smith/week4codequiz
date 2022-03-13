let scoreText = document.querySelector('#username');

// let timer = document.querySelector('.timer')
// let time = localStorage.getItem('time')
let scores = []
let score = localStorage.getItem('time')


storeScore = () => {
    let highscores = JSON.parse(localStorage.getItem('highscores'))
    console.log(scoreText.value)
scores.push(scoreText.value+': '+score)
highscores.push(scoreText.value+': '+score)
localStorage.setItem(('highscores'), JSON.stringify(highscores))
}

if (window.location == 'http://127.0.0.1:5500/week4codequiz/HighestScores.html'){
    // if(JSON.parse(localStorage.getItem('highscores')).length > 0){
        console.log(JSON.parse(localStorage.getItem('highscores')).length > 0)
        let highscores = JSON.parse(localStorage.getItem('highscores'))
    let highScoreList = document.querySelector('.highscores')
    console.log(highscores)
    for (let i = 0; i < highscores.length; i++) {
        console.log(highscores[i])
        highScoreList.innerHTML = `
       
        <li>${highscores[i]}</li>
        <li>${highscores[i-1]}</li>
        <li>${highscores[i-2]}</li>
 
        `;
        
    }
    } else {document.querySelector('#final-score').innerHTML = score}

    

    // }