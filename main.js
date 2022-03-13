// /**
//     Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

//     Generare casualmente le statistiche di gioco, secondo queste regole:

//     A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

//     B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
//     C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//  */


// const giocatore={
//     "Codice-giocatore":generateCode(),
//     Nome:"Paolo",
//     Cognome:"francesco",
//     "Età":"22",
//     mpp:Rnd(0,50),
//     pct3:Rnd(0,100)+"%"
// }


// function Rnd(min,max){
//     return Math.floor(Math.random() * max) + min;
// }




// function generateCode(){
//     let charpart=makechar(3);
//     let numpart=makenums(3);
//     return charpart+numpart;
// }
// function makechar(length) {
//     let result           = '';
//     let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// function makenums(length) {
//     let result           = '';
//     let characters       = '0123456789';
//     let charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// console.log(giocatore);




/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

// const automobili=[
//     {
//         marca:"HONDA",
//         modello:"NSR50",
//         alimentazione:"benzina"
//     },
//     {
//         marca:"NISSAN",
//         modello:"NP300",
//         alimentazione:"diesel"
//     },
//     {
//         marca:"Tm",
//         modello:"MX250F",
//         alimentazione:"benzina"
//     },
//     {
//         marca:"POLARIS",
//         modello:"XPEDITION 425",
//         alimentazione:"diesel"
//     },
//     {
//         marca:"SEA-DOO",
//         modello:"GTX 4-TEC WAKE",
//         alimentazione:"gpl"
//     },
//     {
//         marca:"KIA",
//         modello:"OPTIMA",
//         alimentazione:"benzina"
//     },
//     {
//         marca:"CHEVROLET",
//         modello:"TRAVERSE",
//         alimentazione:"diesel"
//     },
//     {
//         marca:"MERCURY",
//         modello:"VILLAGER",
//         alimentazione:"benzina"
//     },
//     {
//         marca:"HONDA",
//         modello:"VT1300CRA STATELINE ABS",
//         alimentazione:"benzina"
//     },
//     {
//         marca:"KTM",
//         modello:"450SX",
//         alimentazione:"metano"
//     },
//     {
//         marca:"FORD",
//         modello:"LOBO",
//         alimentazione:"elettrico"
//     },
//     {
//         marca:"BMW",
//         modello:"R1150RT",
//         alimentazione:"benzina"
//     }
// ];


//     let mABenzina= automobili.filter((Macchina)=>{
//         if(Macchina.alimentazione=="benzina")
//             return true;
//         return false;
//     });
//     let mADiesel= automobili.filter((Macchina)=>{
//         if(Macchina.alimentazione=="diesel")
//             return true;
//         return false;
//     })
//     let ilresto= automobili.filter((Macchina)=>{
//         if(Macchina.alimentazione=="diesel"||Macchina.alimentazione=="benzina")
//             return false;
//         return true;
//     })

// console.log(mABenzina);
// console.log(mADiesel);
// console.log(ilresto);




/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */


    const Stringhe=['pippo', 'PLUTO', 'Paperino'];
    const stringheFormattati= Stringhe.map((parola)=>{
        return parola.charAt(0).toUpperCase()+parola.substring(1).toLowerCase();
    })
    console.table(Stringhe);
    console.table(stringheFormattati);