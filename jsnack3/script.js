/* Il software deve chiedere per 10 volte 
all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */
const numbers = document.createElement("div");
const somma = document.createElement("div");
let som = 0;
for (i = 0; i < 10; i++) {
  const number = prompt("scrivi un numero");
  numbers.innerHTML += ` ${number} + `;
  som = som + Number(number);
  somma.innerHTML = `Somma = ${som}`;
}
document.body.appendChild(numbers);
document.body.appendChild(somma);
console.log(som);
