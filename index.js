/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {

    if (a===b) {
    return (a+b)*3
    }


    return a + b
}

console.log(crazySum(5, 5))
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(a) {
    if((a >= 20 && a <= 100)||(a === 400)) {
        return true 
    } else {
        return false
    }
}

console.log(boundary(400))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {

    return stringa.split("").reverse().join("")
    
}

console.log(reverseString("SALAME"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {

    let words = str.split(" ")
    let Word = ""
    let phrase = []
    

    for (i = 0; i < words.length; i++) {
    Word = words[i].split("")[0].toUpperCase() + words[i].slice(1) 
    phrase.push(Word)
}
return phrase.join(" ") // usare "join" ti fa risparmiare lo spazio finale (join unisce le diverse parti di un array tutto insieme)
}

console.log(upperFirst("ciao come stai"))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {

    random = []
    for (i = 0; i < n; i++) {
        nrandom = Math.round(Math.random() * 10) //.round approssima per eccesso se > 0.5 o difetto se < 0.5 .floor approssima SEMPRE x difetto .ceil SEMPRE in eccesso 
        random.push(nrandom)
    }

    return random
    
}

console.log(giveMeRandom(20)) 

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2
    
}

console.log("area", area(5, 5))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    if ((Math.abs(19 - n) > 19)) {
        return Math.abs(19 - n) * 3
    } else {
        return Math.abs(19 - n)
    }
}
console.log(crazyDiff(50))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(str) {

    if (str.split(" ")[0] === "code"||(str.split(" ")[0] === "Code")) { 
    // si puo usare .indexOf (restituisce l'indice in cui si trova una certa sottostringa)
    // cosi str.indexOf("code")===0 -> return str
        return str

    } else {

        return str.concat(" code") // oppure così: return str + " code"
    }

}

console.log(codify("Code"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {

    if (((n % 3)===0)||((n % 7)===0)) {
        return true 
    } else {
        return false
    }
    
}

console.log(check3and7(8))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {

    return substr = str.slice(1, (str.length - 1))
    
}

console.log(cutString("SCRIVANIA"))