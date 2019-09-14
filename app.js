function game() {
    let playerScore = 0;
    let computerScore = 0;

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

        const preferences = document.querySelectorAll('.preferences button');
    }






    // I gotta call all inner functions over here to make them work
    startGame();
    playMatch();


}

//to start the game
game();