// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let randomNumberUser = Math.floor(Math.random() * 6) + 1;
let randomNumberPc = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberUser, randomNumberPc);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winner = document.getElementById("winner");

if (randomNumberUser > randomNumberPc) {
    winner.innerHTML = "Player Winner";
} 

else if (randomNumberUser < randomNumberPc) {
    winner.innerHTML = "CPU Winner";
} 

else {
    winner.innerHTML = "Draw";
}