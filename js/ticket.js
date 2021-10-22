// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// variabili generali

const prezzoKm = 0.21;
let prezzoTicket;
const prezzoFinale = document.getElementById('calculated_ticket');

// chiedere all'utente quanti kilometri deve percorrere

const userKm = parseInt(prompt("Inserire quanti Kilometri devi percorrere: "));
// chiedere all'utente quanti anni ha
const userAge =  parseInt(prompt("Inserisci la tua età (per un possibile sconto): "));

// calcolare il prezzo del biglietto (senza sconto)
prezzoTicket = userKm * prezzoKm;

// applicare lo sconto

if (userAge < 18 ) {
    prezzoTicket = prezzoTicket - (prezzoTicket * 0.20);
    alert("Hai ottenuto uno sconto del 20% per essere minorenne!");
} else if (userAge >= 65) {
    prezzoTicket = prezzoTicket - (prezzoTicket * 0.40);
    alert("Hai ottenuto uno sconto del 40% per essere over 65!");
} else {
    alert("Non hai ottenuto nessuno sconto!!!")
}


// prezzo finale con arrotondamento a 2 cifre decimali
// prezzoTicket = prezzoTicket.toFixed(2);

// stampa del prezzo finale
prezzoFinale.innerHTML = `Il prezzo del biglietto per ${userKm} km è di ${prezzoTicket.toFixed(2)}€`;

