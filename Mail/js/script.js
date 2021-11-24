// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Chiedi all’utente la sua email,
const email = prompt("Insert email");
const listEmail = ["pippofranco@icloud.com", "francopippo@icloud.com", "franco@icloud.com", "pippo@icloud.com", "frapippo@icloud.com"];
let find = false;

// Controlla che sia nella lista di chi può accedere,
for (let i = 0; i < listEmail.length; i++) {

    const element = listEmail[i];
    if (email.toLowerCase() == element.toLowerCase()) {
        find = true;
    }
}

// Stampa un messaggio appropriato sull’esito del controllo.
if (find) {
    alert("Authorized Access");
} 

else {
    alert("Denied Access");
}