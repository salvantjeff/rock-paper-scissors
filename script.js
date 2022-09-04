const gameStatus = document.querySelector('.message');
const roundResults = document.querySelector('.info');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.cpu-score');
const weapons = document.querySelectorAll('[data-val]');
const modal = document.querySelector('.modal');
const playAgain = document.querySelector('.play-again');
const result = document.querySelector('.result');

let cpuScoreVal = 0;
let playerScoreVal = 0;

const getComputerChoice = () => {
    const choice = ['rock','paper','scissors'];
    const rand = Math.floor(Math.random() * 3);
    return choice[rand];
}

function play() {
    let playerChoice = this.dataset.val;
    let cpuChoice = getComputerChoice();

    // Rules of game:
    // Tie
    if (cpuChoice === playerChoice) {
        roundResults.textContent = `Its a draw! ${playerChoice} = ${cpuChoice}`;
    }
    //win
    if ((playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')) {

        playerScoreVal++;
        playerScore.textContent = playerScoreVal;
        roundResults.textContent = `you win! ${playerChoice} > ${cpuChoice}`;
    }
    //lose
    if ((playerChoice === 'scissors' && cpuChoice === 'rock') ||
        (playerChoice === 'rock' && cpuChoice === 'paper') ||
        (playerChoice === 'paper' && cpuChoice === 'scissors')) {
        
        cpuScoreVal++;
        cpuScore.textContent = cpuScoreVal;
        roundResults.textContent = `you lose! ${playerChoice} < ${cpuChoice}`;
    }
    //End game if player or cpu score reaches 5
    if (cpuScoreVal >= 5 || playerScoreVal >= 5) {
        result.textContent = cpuScoreVal === 5 ? 'you lose!' : 'you win!';
        modal.showModal();
    } 
}

function newGame() {
    cpuScoreVal = 0;
    playerScoreVal = 0;
    playerScore.textContent = playerScoreVal;
    cpuScore.textContent = cpuScoreVal;
    return play;
}

weapons.forEach(weapon => weapon.addEventListener('click', play));