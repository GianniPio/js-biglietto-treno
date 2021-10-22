// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// variabili generali

const prezzoKm = 0.21;
let prezzoTicket;
let userName;
const textName = document.getElementById('nome');
let userCognome;
const textCognome = document.getElementById('cognome');
const textStato = document.getElementById('stato');
const prezzoFinale = document.getElementById('calculated_ticket');
var d = new Date();

// stampa della data attuale
const textData = document.getElementById('date').innerHTML = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

// Chiedere all'utente il nome
userName = prompt("Inserire il tuo nome: ");

// Chiedere cognome all'utente
userCognome = prompt("Inserire il cognome: ");


// chiedere all'utente quanti kilometri deve percorrere
const userKm = parseInt(prompt("Inserire quanti Kilometri devi percorrere: "));

// chiedere all'utente quanti anni ha
const userAge =  parseInt(prompt("Inserisci la tua età (per un possibile sconto): "));

// calcolare il prezzo del biglietto (senza sconto)
prezzoTicket = userKm * prezzoKm;

// applicare lo sconto

let scontoKm;

if (userAge < 18 ) {
    scontoKm = prezzoTicket * 0.20;
    prezzoTicket = prezzoTicket - scontoKm;
    alert("Hai ottenuto uno sconto del 20% per essere minorenne!");
    textStato.innerHTML = `Minorenne -- applicato sconto del 20%`;
} else if (userAge >= 65) {
    scontoKm = prezzoTicket * 0.40;
    prezzoTicket = prezzoTicket - scontoKm;
    alert("Hai ottenuto uno sconto del 40% per essere over 65!");
    textStato.innerHTML = `Over 65 -- applicato sconto del 40%`;
} else {
    alert("Non hai ottenuto nessuno sconto!!!");
    textStato.innerHTML = `Adulto -- nessuno sconto applicabile`;
}


// prezzo finale con arrotondamento a 2 cifre decimali
prezzoTicket = prezzoTicket.toFixed(2);

// stampa finale
textName.innerHTML = userName ;
textCognome.innerHTML = userCognome;
const textAge = document.getElementById('eta').innerHTML = userAge;
prezzoFinale.innerHTML = `Il prezzo del biglietto per ${userKm} km è di ${prezzoTicket}€`;




