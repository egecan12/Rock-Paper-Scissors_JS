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


        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector(".scissors");

        const player_hand = document.querySelector(".player_hand");
        const computer_hand = document.querySelector(".pc_hand");
        let winner = document.querySelector(".winner");
        let pScore = document.querySelector(".pScore");
        let cScore = document.querySelector(".cScore");

        //this is for the animation part
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                computer_hand.style.animation = "";
                player_hand.style.animation = "";
            })
        });
        //

        //buttons eventlisteners start here

        rockBtn.addEventListener("click", function rockPick() {

            playerChoice = "Rock";
            console.log(playerChoice);
            player_hand.src = "rock.png";
            computer_hand.style.animation = 'computerShake 2s ease';
            player_hand.style.animation = 'playerShake 2s ease';




            const computerOptions = ["Rock", "Paper", "Scissors"];

            let randomNumber = Math.floor(Math.random() * 3);

            let pcChoice = computerOptions[randomNumber];


            if (pcChoice === "Rock") {
                computer_hand.src = "rock.png";
                winner.textContent = " Oh tie "


            } else if (pcChoice === "Paper") {

                computer_hand.src = "paper.png";
                winner.textContent = " Hahahahahahah Loser !"
                computerScore = computerScore + 1;
                cScore.innerHTML = computerScore

            } else {
                computer_hand.src = "scissors.png";
                winner.textContent = " Good Job";
                playerScore = playerScore + 1;
                pScore.innerHTML = playerScore
            }

        })

        paperBtn.addEventListener("click", function paperPick() {
            playerChoice = "Paper";
            console.log(playerChoice);
            player_hand.src = "paper.png";
            player_hand.style.animation = 'playerShake 2s ease';
            computer_hand.style.animation = 'computerShake 2s ease';


            const computerOptions = ["Rock", "Paper", "Scissors"];

            let randomNumber = Math.floor(Math.random() * 3);

            let pcChoice = computerOptions[randomNumber];

            if (pcChoice === "Rock") {
                computer_hand.src = "rock.png";
                winner.textContent = " Good job"
                playerScore = playerScore + 1;
                pScore.innerHTML = playerScore

            } else if (pcChoice === "Paper") {
                computer_hand.src = "paper.png";
                winner.textContent = " It is tie lets try again"

            } else {
                computer_hand.src = "scissors.png";
                winner.textContent = " Hahaahahahah you are the loser";
                computerScore = computerScore + 1;
                cScore.innerHTML = computerScore

            }
        })

        scissorsBtn.addEventListener("click", function scisPick() {
            playerChoice = "Scissors";
            console.log(playerChoice);
            player_hand.src = "scissors.png";
            player_hand.style.animation = 'playerShake 2s ease';
            computer_hand.style.animation = 'computerShake 2s ease';


            const computerOptions = ["Rock", "Paper", "Scissors"];

            let randomNumber = Math.floor(Math.random() * 3);

            let pcChoice = computerOptions[randomNumber];

            if (pcChoice === "Rock") {
                computer_hand.src = "rock.png";
                winner.textContent = " Hahahahahahha you are the loser"
                computerScore = computerScore + 1;
                cScore.innerHTML = computerScore

            } else if (pcChoice === "Paper") {
                computer_hand.src = "paper.png";
                winner.textContent = " Nice work Johnny"
                playerScore = playerScore + 1;
                pScore.innerHTML = playerScore

            } else {
                computer_hand.src = "scissors.png";
                winner.textContent = " Tie Tie Tie !!!!";

            }

        })


    }

    // Call all inner functions over here to make them work
    startGame();
    playMatch();

}

//to start the game
game();