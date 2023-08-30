/* L’utente inserisce due numeri in successione, 
con due prompt.
Il software stampa il maggiore */

/* const firstNumber = prompt("Scrivi un numero");
const secondNumber = prompt("scrivi un numero");
const textEL = document.getElementById("number");
if (firstNumber > secondNumber) {
  textEL.innerHTML = "il PRIMO numero è piu grande";
  console.log("il primo numero è piu grande");
} else if (firstNumber < secondNumber) {
  textEL.innerHTML = "il SECONDO numero è piu grande";
  console.log("il secondo numero è piu grande");
} else {
  textEL.innerHTML = "sono UGUALI";
  console.log("sono uguali");
} */

/* Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */
const array = [];
let i = 0;
while (i <= 1) {
  const number = Number(prompt("Scrivi un numero"));

  if (!isNaN(number)) {
    array.push(number);
    console.log(array);
  } else {
    console.log("errore");
  }

  i++;
}
if (array[0] > array[1]) {
  console.log(array[0] + "è maggiore di " + array[1]);
} else if (array[0] < array[1]) {
  console.log(array[0] + "è minore di " + array[1]);
} else {
  console.log(array[0], array[1], "sono pari");
}
