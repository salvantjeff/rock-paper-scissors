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
}

weapons.forEach(weapon => weapon.addEventListener('click', play));