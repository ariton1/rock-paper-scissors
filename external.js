  const choices = document.querySelectorAll('.choices');
  const resetval = document.querySelector('.resetval');
  const result = document.querySelector('.result');
  let playerScore = 0;
  let computerScore = 0;
  choices.forEach((choice) => {
      choice.addEventListener('click', (e) => {
        const playerChoice = e.target.textContent;

        const compOptions = ['Rock', 'Paper', 'Scissors'];
        const computerChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
        playRound(playerChoice, computerChoice);
		checkWinner()
		updateScore();

      })
  });

  function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
      result.textContent = "Computer used Scissors. You win!";
	  playerScore++;
    } else if(playerSelection === 'scissors' && computerSelection === 'Paper'){
      result.textContent = "Computer used Paper. You win!";
	  playerScore++;
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
      result.textContent = "Computer used Rock. You win!";
	  playerScore++;
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
      result.textContent = "Computer used Rock. You lose!";
	  computerScore++;
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
      result.textContent = "Computer used Scissors. You lose!";
	  computerScore++;
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
      result.textContent = "Computer used Paper. You lose!";
	  computerScore++;
    } else {
      result.textContent = `Computer used ${computerSelection}, it is a draw!`;
    }
  }
  function resetValues(){
    playerScore = 0;
    computerScore = 0;
	document.getElementById("playerScore").textContent = 0;
	document.getElementById("computerScore").textContent = 0;
	document.getElementById("winner").textContent = '';
  }

  function updateScore(){
	document.getElementById("playerScore").textContent = playerScore;
	document.getElementById("computerScore").textContent = computerScore;
  }

  function checkWinner(){
	  if(playerScore === 5){
		document.getElementById("winner").textContent = 'You win!'
	  } else if(computerScore === 5){
		document.getElementById("winner").textContent = 'Computer wins!'
	  }
  }