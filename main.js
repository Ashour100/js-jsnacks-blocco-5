/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


const giocatore={
    "Codice-giocatore":generateCode(),
    Nome:"Paolo",
    Cognome:"francesco",
    "Età":"22",
    mpp:Rnd(0,50),
    pct3:Rnd(0,100)+"%"
}


function Rnd(min,max){
    return Math.floor(Math.random() * max) + min;
}




function generateCode(){
    let charpart=makechar(3);
    let numpart=makenums(3);
    return charpart+numpart;
}
function makechar(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function makenums(length) {
    let result           = '';
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(giocatore);