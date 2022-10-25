let player;
let computer;
let result;

const playerScore = document.querySelector(".playerOne");
const compScore = document.querySelector(".playerComp"); 
const resultWinner = document.querySelector(".result");
const choiceBtn = document.querySelectorAll(".choiceBtn");

choiceBtn.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn(); 
    playerScore.textContent = `Player One: ${player}`;
    compScore.textContent = `Player Computer: ${computer}`;
    // fonts size
    playerScore.style.fontSize = "x-large";
    compScore.style.fontSize = "x-large";
    // font family
    playerScore.style.fontFamily = "Poppins, sans-serif";
    compScore.style.fontFamily = "Poppins, sans-serif";
    resultWinner.textContent = checkWinner();

    
}));

    function computerTurn(){
        const randNum = Math.floor(Math.random() * 3) + 1;

        switch(randNum){
            case 1:
                computer = "Rock";
                break;
            case 2:
                computer = "Paper";
                break;
            case 3:
                computer = "Scissor";
                break;
        }
       
    }

    function checkWinner(){
        if(player == computer){
            return "Draw!";
        }else if(computer == "Rock"){
            return (player == "Paper") ? "You win!" : "You win!"
        }else if(computer == "Paper"){
            return (player == "Scissor") ? "You Lose!" : "You win!"
        }else if(computer == "Scissor"){
            return (player == "Rock") ? "You Lose!" : "You win!"
        }
    }

   