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


        const computerOptions = ["Rock", "Paper", "Scissors"];

        let randomNumber = Math.floor(Math.random() * 3);

        let pcChoice = computerOptions[randomNumber];


        rockBtn.addEventListener("click", function rockPick() {
            playerChoice = "Rock";
            console.log(playerChoice);
            player_hand.src = "rock.png";

            if(pcChoice === "Rock"){
                winner.textContent = " Oh tie try again"

            }
            else if (pcChoice === "Paper"){
                winner.textContent = " Hahahahahahah Loser !"

            }
            else{
                winner.textContent = " Good Job";

            }

        })

        paperBtn.addEventListener("click", function paperPick() {
            playerChoice = "Paper";
            console.log(playerChoice);
            player_hand.src = "paper.png";
           
            if(pcChoice === "Rock"){
                winner.textContent = " Good job"   
            }
            else if (pcChoice === "Paper"){
                winner.textContent = " It is tie lets try again"

            }
            else{
                winner.textContent = " Hahaahahahah you are the loser";

            }
        })

        scissorsBtn.addEventListener("click", function scisPick() {
            playerChoice = "Scissors";
            console.log(playerChoice);
            player_hand.src = "scissors.png";

            if(pcChoice === "Rock"){
                winner.textContent = " Hahahahahahha you are the loser"   
            }
            else if (pcChoice === "Paper"){
                winner.textContent = " Nice work Johnny"

            }
            else{
                winner.textContent = " Tie Tie Tie !!!!";

            }

        })


        //buttons
        preferences.forEach(preference => {
            preference.addEventListener('click', getTheImage);
            preference.addEventListener('click', compareHands);

        });

        //Computer options


        compareHands(pcChoice, playerChoice);



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


        // Comparing hands
        function compareHands(cChoice, pChoice) {

            //check for tie
            if (pChoice === cChoice) {

                winner.textContent = " Ohh tie !"
                return;
            }
            //  check for rock
            else if (pChoice === "Rock") {
                if (cChoice === "Scissors") {
                    winner.textContent = " Good job Lets do it again !"
                    return;
                } else {
                    winner.textContent = " Hahahahahahah Loser !"
                    return;
                }
            }

            //check for paper          
            if (pChoice === "Paper") {
                if (cChoice === "Rock") {
                    winner.textContent = " Good job Lets do it again !"
                    return;
                } else {
                    winner.textContent = " Hahahahahahah Loser !"
                    return;
                }
            }

            //check for scissors
            if (pChoice === "Scissors") {
                if (cChoice === "Paper") {
                    winner.textContent = " Good job Lets do it again !"
                    return;
                } else {
                    winner.textContent = " Hahahahahahah Loser !"
                    return;
                }
            }
        }


    }

    // Call all inner functions over here to make them work
    startGame();
    playMatch();

}

//to start the game
game();