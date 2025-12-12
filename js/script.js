/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


// definisco un array con i numeri da ricordare

const casualNumber = [1, 2, 3, 4, 5];


// stampo in console i numeri che l'utente deve ricordare

console.log("Ricorda questi numeri:", casualNumber);


// imposto una funzione da eseguire tra 30000 millisecondi (30 secondi)

setTimeout(function () {

 // creo un array vuoto che conterrà i numeri inseriti dall'utente

    const userNumbers = []

    for (let i = 0; i < casualNumber.length; i++) {
         // chiedo all'utente, tramite prompt, di inserire un numero e lo converto in intero
        const numero = parseInt(prompt("inserisci un numero che ricordi"));
         // aggiungo il numero inserito dall'utente all'array userNumbers
        userNumbers.push(numero);
        
    }

    // stampo in console i numeri che l'utente ha inserito

    console.log("hai inserito:", userNumbers);

    // creo un array vuoto che userò per memorizzare i numeri indovinati
    const indovinato = [];

     // ciclo di nuovo per confrontare ogni valore inserito dall'utente con quelli originali
    for (let i = 0; i < casualNumber.length; i++) {
        
        // se l'array casualNumber contiene il numero inserito dall'utente

        if (casualNumber.includes(userNumbers[i])) {

            // aggiungo quel numero alla lista dei numeri indovinati

            indovinato.push(userNumbers[i]);
        }

       

    } 

    // alla fine stampo la lista dei numeri indovinati (una sola volta)
    
     console.log("hai indovinato:", indovinato);
    
} , 30000 );  // durata del timer: 30000 ms = 30 secondi








