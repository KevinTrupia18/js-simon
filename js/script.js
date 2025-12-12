/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


const casualNumber = [1, 2, 3, 4, 5];

console.log("Ricorda questi numeri:", casualNumber);


setTimeout(function () {

    const userNumbers = []

    for (let i = 0; i < casualNumber.length; i++) {
        const numero = parseInt(prompt("inserisci un numero che ricordi"));
        userNumbers.push(numero);
        
    }

    console.log("hai inserito:", userNumbers);

    const indovinato = [];

    for (let i = 0; i < casualNumber.length; i++) {

        if (casualNumber.includes(userNumbers[i])) {

            indovinato.push(userNumbers[i]);
        }

       

    } 
    
     console.log("hai indovinato:", indovinato);
    
} , 30000 );








