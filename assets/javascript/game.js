var videoGames = ["pacman", "spaceinvaders", "donkeykong", "castlevania", "metroid", "supermario", "legendofzelda"]

//Empty variables to store values later
var randomGame = "";
var gameWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesleft = 8;
// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>


//_______________________
//GAME START FUNCTION
//_______________________

function Game() {
    randomGame = videoGames[Math.floor(Math.random() * videoGames.length)];

    gameWord = randomGame.split("");

    
    blanks = gameWord.length;

    for (var i = 0; i < blanks; i++)  {
        blanksAndCorrect.push("_");
    }

   
    document.getElementById("answer").innerHTML = "  " + blanksAndCorrect.join("  ");

  
    console.log(randomGame);
    console.log(gameWord);
    console.log(blanks);
    console.log(blanksAndCorrect);
}


 var pacman = { name: "pacman" }; 
 var spaceinvaders = { name: "spaceinvaders" }; 
 var donkeykong = { name: "donkeykong" }; 
 var castlevania = { name: "castlevania" }; 
 var metroid = { name: "metroid" }; 
 var supermario = { name: "supermario" }; 
 var legendofzelda = { name: "legendofzelda" }; 

 var pacman = document.getElementById("pacman")
 var spaceinvaders = document.getElementById("spaceinvaders");
 var donkeykong = document.getElementById("donkeykong");
 var castlevania = document.getElementById("castlevania");
 var metroid = document.getElementById("metroid");
 var supermario = document.getElementById("supermario");
 var legendofzelda = document.getElementById("legendofzelda");



function aud() {
    
    if (randomGame === videoGames[0]) 
    {
        castlevania.pause();
        metroid.pause();
        supermario.pause();
        legendofzelda.pause();
        donkeykong.pause();
        spaceinvaders.pause();
        pacman.play();
        document.getElementById("image").src = "./assets/images/pacman.jpg";
    }
    

    else if (randomGame === videoGames[1])
     {
        castlevania.pause();
        metroid.pause();
        supermario.pause();
        legendofzelda.pause();
        donkeykong.pause();
        pacman.pause();
        spaceinvaders.play();
        document.getElementById("image").src = "./assets/images/invaders.jpg";
    }
    
    else if (randomGame === videoGames[2]) {
        castlevania.pause();
        metroid.pause();
        supermario.pause();
        legendofzelda.pause();
        pacman.pause();
        spaceinvaders.pause();
        donkeykong.play();
        document.getElementById("image").src = "./assets/images/donkey.jpg";
    }
    
    else if (randomGame === videoGames[3]) {
        spaceinvaders.pause();
        metroid.pause();
        supermario.pause();
        legendofzelda.pause();
        donkeykong.pause();
        pacman.pause();
        castlevania.play();
        document.getElementById("image").src = "./assets/images/castle.jpg";
    }
    


    else if (randomGame === videoGames[4])
     {
  castlevania.pause();
        supermario.pause();
        legendofzelda.pause();
        donkeykong.pause();
        spaceinvaders.pause();
        pacman.pause();
        metroid.play();
        document.getElementById("image").src = "./assets/images/metroid.jpg";
    }
    
    else if (randomGame === videoGames[5]) {
        castlevania.pause();
        metroid.pause();
        legendofzelda.pause();
        donkeykong.pause();
        spaceinvaders.pause();
        pacman.pause();
        supermario.play();
        document.getElementById("image").src = "./assets/images/mario.jpg";
    }
   
    
    else if (randomGame === videoGames[6]) {
        castlevania.pause();
        metroid.pause();
        supermario.pause();
        donkeykong.pause();
        spaceinvaders.pause();
        pacman.pause();
        legendofzelda.play();
        document.getElementById("image").src = "./assets/images/zelda.jpg";
    }
};



function reset() {
    guessesleft = 8;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}




function checkLetters(letter) {
    var letterInGame = false;
    
    for (var i = 0; i < blanks; i++) {
        if (randomGame[i] == letter) {
            letterInGame = true;
        }
    }
    
    if (letterInGame) {
        
        for (var i = 0; i < blanks; i++) {
            if (randomGame[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesleft--;
    }
    console.log(blanksAndCorrect);
}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesleft)

    
    if (gameWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
     
        document.getElementById("winstracker").innerHTML = " " + wins;
        
    } else if (guessesleft === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/2-WordGuess.jpg"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    
    document.getElementById("answer").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesleft").innerHTML = " " + guessesleft;
}




Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
   
    checkLetters(guesses);
    
    complete();
   
    console.log(guesses);
    
    document.getElementById("playerwrong").innerHTML = "  " + wrongGuess.join(" ");
}
