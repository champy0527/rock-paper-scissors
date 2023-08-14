let pScore = document.querySelector('.pScore');
let cScore = document.querySelector('.cScore');
const winner = document.querySelector('.winner');
const choiceBtns = document.querySelectorAll('.choice-btn');
const computerHand = document.getElementById('computer-hand');
const playerHand = document.getElementById('player-hand');
let image = document.querySelectorAll('.image');


let playerChoice; //playerChoice
let computerChoice
let playRoundResult;

pScore = 0;
cScore = 0;


 //establish computer choice
const getComputerSelection = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2:   
            return 'scissors';
    }
}

computerChoice = getComputerSelection();




const updateScore = () => {
    pScore.textContent = pScore;
    cScore.textContent = cScore;
}


const playRound = (playerChoice, computerChoice) => {
    computerHand.src = './images/computer-hand/'+ computerChoice +'.webp'

    if (playerChoice === computerChoice) {
        winner.textContent = `It's a draw!`;
        return;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            winner.textContent = 'Player wins!';
            pScore++;
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            return;
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            winner.textContent = 'Player wins!';
            pScore++;
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            return;
        } 
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            winner.textContent = 'Player wins!';
            pScore++;
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            return;
        }
    
    }
    
}

const updateRound = () => {
    while (pScore < 6 || cScore < 6) {
        //no dom event for this yet!
        choiceBtns.forEach(choiceBtn => {
            choiceBtn.addEventListener('click', () => {
                playerChoice = choiceBtn.textContent;
                playerHand.src = './images/player-hand/'+ playerChoice +'.webp'
                // console.log(computerChoice) //works
                // console.log(playerChoice) //works
        
                playRound(playerChoice, computerChoice); //works
                updateScore();  
            })    
        console.log(pScore);
        console.log(cScore); 
        })
        
    }
}

updateRound();


//task 3 - create an update score function. The update score function doesn't work. Rethink how this all links together!


//player hand function change -- not needed in the end
//player hand changes on selection
// const playerChangeImage = (playerChoice) => {
//     if (playerChoice === 'rock') {
//         playerHand.src = './images/player-hand/rock.webp'
//         return;
//     }
//     if (playerChoice === 'paper') {
//         playerHand.src = './images/player-hand/paper.webp'
//         return;
//     }
//     if (playerChoice === 'scissors') {
//         playerHand.src = './images/player-hand/scissors.webp'
//         return;
//     }
// }
