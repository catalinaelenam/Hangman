const words = ["javascript", "hangman", "dinosaur", "spinach"];
let randomWord = Math.floor(Math.random() * words.length);
let answer = words[randomWord];
let display = answer.length;
let guessesLeft = 7;
const wordsDisplay = document.getElementById("word");
const lettersGuessedDisplay = document.getElementById("letters-guessed");
const guessesLeftDisplay = document.getElementById("guesses-left");
let Notif = document.getElementById("Notif");

function guessWord() {
    for(let i = 0; i < display; ++i) {
        const span = document.createElement("span");
        span.textContent = "_ ";
        wordsDisplay.appendChild(span);
    }    
}

guessWord();

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress (event) {
    if(/^[a-zA-Z]$/.test(event.key)) {
        const letters = document.querySelectorAll("#word span");
        let lettersGuessed = false;
        for(let i = 0; i < letters.length; ++i) {
            if(answer[i].toUpperCase() === event.key.toUpperCase()) {
                letters[i].textContent = event.key.toUpperCase();
                lettersGuessed = true;
            }
        }
        if(!lettersGuessed) {
            --guessesLeft;
            guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;
        } 
        if(guessesLeft <= 0) {
            Notif.textContent = "Ai pierdut jocul :(";
        } 
        let completeWord = true;
        for (let i = 0; i < letters.length; ++i) {
             if (letters[i].textContent === "_ ") {
                completeWord = false;
                break;
            }
        }
        if (completeWord) {
            Notif.textContent = "Yay!!! Ai castigat! :)"
        }
    }
}





