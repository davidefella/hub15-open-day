console.log("Welcome to our Digitazon course!");
console.log(10-5); 
console.log(10*5); 
console.log(10/5); 
console.log(15%5); // Per calcolare il resto di una divisione


/* In programmazione, una variabile è un'entità che rappresenta un valore o un insieme di valori che possono essere modificati durante l'esecuzione del programma. Una variabile può contenere numeri, stringhe di testo, booleani o altri tipi di dati. 

La dichiarazione di una variabile è il processo mediante il quale viene creata una variabile e riservata una porzione di memoria del computer per memorizzare il valore della variabile
*/

let nome = "Davide";
let cognome = 'Fella';
let eta = 30;
let trueCondition = true; 
let myBirthday = new Date(2005,4,12); //ricorda mese-1

let numero1 = 10; 
let numero2 = 5; 

console.log(numero1 > numero2);        // true
console.log(numero1 < numero2);        // false
console.log(numero1 >= numero2);       // true
console.log(numero1 <= numero2);       // false
console.log(numero1 !== numero2);      // true


/**
 if ed else sono due parole chiave in JavaScript che vengono utilizzate per creare una condizione. Una condizione è un'istruzione che controlla se una determinata espressione è vera o falsa. Una variabile booleana è una variabile che può contenere solo due valori: true (vero) o false (falso). In una condizione if/else, viene utilizzata una variabile booleana per determinare quale blocco di codice eseguire.
 */

 // Definisici una funzione
if (eta >= 18) {
  console.log("Sei maggiorenne");
} else {
  console.log("Sei minorenne");
}




/* 
Un loop for è un costrutto di programmazione che viene utilizzato per eseguire una determinata porzione di codice per un numero definito di volte. 
Un loop while è un costrutto di programmazione che viene utilizzato per eseguire una determinata porzione di codice finché una determinata condizione è vera. 

Entrambi i loop sono utilizzati per eseguire ripetutamente una determinata porzione di codice e sono utilizzati per automatizzare alcune operazioni o eseguire un'operazione su un insieme di elementi.
*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}
  
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}


/** OPERATORI LOGICI: Gli operatori logici sono strumenti che ti consentono di eseguire operazioni di confronto e di prendere decisioni basate su condizioni in un programma. Sono molto utili quando hai bisogno di verificare più condizioni contemporaneamente.
 * 
 * --> AND: combinare due o più condizioni e restituisce "vero" solo se tutte le condizioni sono vere
 * --> OR: L'operatore logico "OR" ti permette di combinare due o più condizioni e restituisce "vero" se almeno una delle condizioni è vera
 * 
 * // AND
    console.log( true && false); // False 
    console.log( false && true); // False 
    console.log( true && true); // True, in tutti gli altri casi viene valutato false
    console.log( false && false); //False

    // OR
    console.log( true || false); // True 
    console.log( false || true); // True 
    console.log( true || true); // true
    console.log( false || false); //false

    console.log(!true); 
 */

    // Esempio con l'operatore AND
var miaEta = 20; // Età della persona
var patenteValida = true; // Indica se la persona ha una patente valida

if (eta >= 18 && patenteValida) {
  console.log("La persona può guidare un'auto.");
} else {
  console.log("La persona non può guidare un'auto.");
}


// Esempio con l'operatore OR
var tempoMeteo = "soleggiato"; // Condizione del tempo
var temperatura = 28; // Temperatura in gradi Celsius

if (tempoMeteo === "soleggiato" || temperatura > 25) {
  console.log("È una bella giornata per uscire!");
} else {
  console.log("Potrebbe essere meglio rimanere al chiuso oggi.");
}

let numeroCasuale = Math.floor(Math.random() * 10) + 1;
console.log(numeroCasuale);


// Utilizzo della funzione:
if (checkAge(myBirthday)) {
  console.log("L'utente è maggiorenne");
} else {
  console.log("L'utente non è maggiorenne");
}

function checkAge(birthday) {
   let today = new Date();
   let age = today.getFullYear() - birthday.getFullYear();
   let monthDiff = today.getMonth() - birthday.getMonth();


   // Se la differenza di mesi è negativa oppure se è zero ma il giorno corrente è precedente al giorno di nascita
   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
     
     // Sottraiamo un anno dalla differenza di anni calcolata in precedenza
     age--;
   }
 
   // Restituiamo un valore booleano che indica se l'utente è maggiorenne o meno
   if(age>=18)
       return true; 
   else 
       return false; 
   
   //return age >= 18;
}










/** PARTE AVANZATA  */
let newArray = new Array(); // Costruttore di classe, arr vuoto
let emptyArray = []; // arr vuoto
let elementsArray = ["Javascript", "Java", "PHP"]; 

console.log(elementsArray); 
console.log(elementsArray[0]); 

console.log( elementsArray.pop() ); // "Cobol"
console.log( elementsArray); 
console.log( elementsArray.push("Python") ); 

// Loops 
console.log("****************************************")
for (let i = 0; i < programmingLanguage.length; i++){
  console.log(programmingLanguage[i]); 
}