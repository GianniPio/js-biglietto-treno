// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// variabili generali

const prezzoKm = 0.21;
let prezzoTicket = document.getElementById("calcualated_ticket");

// chiedere all'utente quanti kilometri deve percorrere

const userKm = prompt("Inserire quanti Kilometri devi percorrere: ");
// chiedere all'utente quanti anni ha
const userAge = prompt("Inserisci la tua età (per un possibile sconto): ");

// calcolare il prezzo del biglietto (senza sconto)
prezzoTicket = userKm * prezzoKm;

// applicare lo sconto

let scontoKm;

if (userAge < 18 ) {
    scontoKm = prezzoTicket * 0.20;
    prezzoTicket = prezzoTicket - scontoKm;
} else if (userAge >= 65) {
    scontoKm = prezzoTicket * 0.40;
    prezzoTicket = prezzoTicket - scontoKm;
}


// prezzo finale
