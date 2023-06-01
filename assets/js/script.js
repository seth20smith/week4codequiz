let scoreText = document.querySelector('#username');
// let timer = document.querySelector('.timer')
// let time = localStorage.getItem('time')
let scores = [];
let score = localStorage.getItem('time') || 0;


storeScore = () => {
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    console.log(scoreText.value)
    scores.push(scoreText.value + ': ' + score);
    highscores.push(scoreText.value + ': ' + score);
    localStorage.setItem(('highscores'), JSON.stringify(highscores));
}

if (window.location == 'https://seth20smith.github.io/week4codequiz/HighestScores.html') {
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    let highScoreList = document.querySelector('.highscores');
    console.log(highscores)
    highScoreList.innerHTML = ''; 
    for (let i = 0; i < highscores.length; i++) {
        // Create a new list item
        let listItem = document.createElement('li');  
       // Set the text of the item to the high score
        listItem.textContent = highscores[i]; 
        highScoreList.appendChild(listItem); 
    }
} else if (window.location == 'https://seth20smith.github.io/week4codequiz/highScore.html') {
    document.querySelector('#final-score').innerHTML = score;

}