function computerPlay(){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win! Rock beats Scissors.'
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win! Scissors beats Paper.'
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats Rock'
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose! Paper beats Rock'
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose! Rock beats Scissors'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose! Scissors beats Paper'
    } else if(playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== "scissors"){
        return 'You did not enter a valid choice'
    } else {
        return 'It\'s a draw'
    }
  }

  function game(){
      while(playerScore !== 5 && computerScore !== 5){
        let playerSelection = prompt().toLowerCase();
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection)
        let res = playRound(playerSelection, computerSelection);
        console.log(res);
        if(res.charAt(4) === 'w'){
            playerScore++;
        } else if (res.charAt(4) === 'l'){
            computerScore++;
        } else {
            return 'Please try again';
        }
      }
      if(playerScore === '5'){
          return 'You Win'
      } else {
          return 'You Lose'
      }
  }