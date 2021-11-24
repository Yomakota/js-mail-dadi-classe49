// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let scoreUser = Math.floor(Math.random() * 6) + 1;
let scorePc = Math.floor(Math.random() * 6) + 1;
console.log(scoreUser, scorePc);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winner = document.getElementById("winner");

if (scoreUser > scorePc) {
    winner.innerHTML = "Player Winner";
    document.getElementById("score-player").innerHTML = scoreUser;
    document.getElementById("score-CPU").innerHTML = scorePc;
} 

else if (scoreUser < scorePc) {
    winner.innerHTML = "CPU Winner";
    document.getElementById("score-CPU").innerHTML = scoreUser;
    document.getElementById("score-player").innerHTML = scorePc;
} 

else {
    winner.innerHTML = "Draw";
}