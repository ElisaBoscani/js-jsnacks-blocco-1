/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */
const shotsEl = document.getElementById("shots");
const arrayNumber = [];

for (let i = 0; i < 6; i++) {
  const number = prompt("Scrivi un numero");

  if (number % 2 !== 0) {
    arrayNumber.push(Number(number));
    const finalNumber = arrayNumber[i];
    const markup = `<li>${finalNumber} </li>`;
    shotsEl.innerHTML += markup;
  } else {
    const markup = `<li>il numero è pari </li>`;
    shotsEl.innerHTML += markup;
    console.log("il numero è pari");
  }

  console.log(arrayNumber);
}
