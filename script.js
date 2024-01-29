"use strict";

window.addEventListener("DOMContentLoaded", start);
let randomNumber = "";

function start() {
    generateRandomNumber();
    document.querySelector('#guess-form').addEventListener('submit', recieveGuess);
}
function generateRandomNumber(){
    randomNumber = Math.floor(Math.random() * 99) + 1;
}
function recieveGuess(event){
    event.preventDefault();
    const form = event.target;
    const guess = form.guess.valueAsNumber;
    form.guess.value = "";
    compareGuess(guess);
}
function compareGuess(guess){
    if (guess === randomNumber){
        guessIsCorrect(guess);
    } else if (guess > randomNumber){
        guessIsTooHigh(guess);
    } else if (guess < randomNumber){
        guessIsTooLow(guess);
    }
}
function guessIsCorrect(guess){
    const list = document.querySelector('#guess-list');
    list.insertAdjacentHTML('beforeend', `<li>You guessed ${guess} that was correct!</li>`)
    document.querySelector('#guess').disabled = true;
    document.querySelector('#guess-btn').disabled = true;
}
function guessIsTooHigh(guess){
    const list = document.querySelector('#guess-list');
    list.insertAdjacentHTML('beforeend', `<li>You guessed ${guess} that was too high - try again</li>`)
}
function guessIsTooLow(guess){
    const list = document.querySelector('#guess-list');
    list.insertAdjacentHTML('beforeend', `<li>You guessed ${guess} that was too low - try again</li>`)
}
// 1. Start med at lave HTML’en hvordan den skal se ud efter et par forkerte gæt, og lav også knapperne.
// 2. Gå så i gang med JavaScripten, lav main-funktionen, og tjek at den udskriver noget i konsollen når siden bliver loadet.
// 3. Tilføj en funktion der laver eventlistenere på knapperne, og også de tre funktioner der bliver kaldt når man trykker på hver knap.
// 4. Lav en funktion til at lave et nyt gæt - og en anden funktion til at vise dette gæt på skærmen.
// 5. Tilret i funktionerne for “for højt”, “for lavt” og “korrekt”, så de viser en besked ved det seneste gæt.
// 6. Lav funktionerne så programmet laver et nyt gæt ved “for højt” og “for lavt”, men stopper ved “korrekt”