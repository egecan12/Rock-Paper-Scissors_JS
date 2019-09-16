function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    //start the game
    function startGame() {
        const playButton = document.querySelector("#playButton");
        const introScene = document.querySelector(".intro");
        const matchUp = document.querySelector(".matchUp");



        function ignore() {
            introScene.classList.add("fadeOut");
            matchUp.classList.add("fadeIn");
        }

        playButton.addEventListener("click", ignore);
    }
    //Play Match
    function playMatch() {


        //3 buttons
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector(".scissors");

        const preferences = document.querySelectorAll(".preferences button");
        const player_hand = document.querySelector(".player_hand");
        const computer_hand = document.querySelector(".pc_hand");
        let winner = document.querySelector(".winner");
        let pScore = document.querySelector(".pScore");
        let cScore = document.querySelector(".cScore");


        const computerOptions = ["Rock", "Paper", "Scissors"];

        let randomNumber = Math.floor(Math.random() * 3);

        let pcChoice = computerOptions[randomNumber];


        rockBtn.addEventListener("click", function rockPick() {
            playerChoice = "Rock";
            console.log(playerChoice);
            player_hand.src = "rock.png";

            if (pcChoice === "Rock") {
                winner.textContent = " Oh tie "
                

            } else if (pcChoice === "Paper") {
                winner.textContent = " Hahahahahahah Loser !"
                computerScore = computerScore + 1;
                cScore.innerHTML = computerScore

            } else {
                winner.textContent = " Good Job";
                playerScore = playerScore + 1;
                pScore.innerHTML = playerScore
            }

        })

        paperBtn.addEventListener("click", function paperPick() {
            playerChoice = "Paper";
            console.log(playerChoice);
            player_hand.src = "paper.png";

            if (pcChoice === "Rock") {
                winner.textContent = " Good job"
                playerScore = playerScore + 1;
                pScore.innerHTML = playerScore

            } else if (pcChoice === "Paper") {
                winner.textContent = " It is tie lets try again"

            } else {
                winner.textContent = " Hahaahahahah you are the loser";
                computerScore = computerScore + 1;
                cScore.innerHTML = computerScore

            }
        })

        scissorsBtn.addEventListener("click", function scisPick() {
            playerChoice = "Scissors";
            console.log(playerChoice);
            player_hand.src = "scissors.png";

            if (pcChoice === "Rock") {
                winner.textContent = " Hahahahahahha you are the loser"
                computerScore = computerScore+1;
                cScore.innerHTML = computerScore

            } else if (pcChoice === "Paper") {
                winner.textContent = " Nice work Johnny"
                playerScore = playerScore + 1;
                pScore.innerHTML = playerScore

            } else {
                winner.textContent = " Tie Tie Tie !!!!";

            }

        })


        //buttons
        preferences.forEach(preference => {
            preference.addEventListener('click', getTheImage);
            preference.addEventListener('click', compareHands);

        });

        

        function getTheImage() {

            switch (pcChoice) {
                case "Paper":
                    computer_hand.src = "paper.png";
                    break;
                case "Rock":
                    computer_hand.src = "rock.png";
                    break;
                case "Scissors":
                    computer_hand.src = "scissors.png";
                default:
                    break;
            }

        }


    }

    // Call all inner functions over here to make them work
    startGame();
    playMatch();

}

//to start the game
game();