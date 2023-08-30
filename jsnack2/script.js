/* L’utente inserisce due parole in successione, 
con due prompt.
Il software stampa prima la parola più corta, 
poi la parola più lunga. */

/* const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("Inserisci una parola");
const text = document.createElement("p");

if (firstWord.length > secondWord.length) {
  text.innerHTML = `${firstWord} è più lunga di ${secondWord}`;
  console.log(firstWord + secondWord);
} else if (firstWord.length < secondWord.length) {
  text.innerHTML = `${secondWord} è più lunga di ${firstWord}`;
  console.log(secondWord + firstWord);
} else {
  text.innerHTML = `${secondWord} e ${firstWord} hanno la stessa lunghezza `;
}
document.body.appendChild(text); */

/* (con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const text = document.createElement("p");
const words = [];
let i = 0;
while (i <= 1) {
  const textWord = prompt("Scrivi una parola");
  words.push(textWord);
  i++;
  console.log(words);
}

if (words[0].length > words[1].length) {
  text.innerHTML = `${words[0]} è più lunga di ${words[1]}`;
  console.log(words[0] + " è più lunga di " + words[1]);
} else if (words[0].length < words[1].length) {
  text.innerHTML = `${words[1]} è più lunga di ${words[0]}`;
  console.log(words[0] + " è più corta di " + words[1]);
} else {
  text.innerHTML = `${words[0]} e ${words[1]} hanno la stessa lunghezza `;
  console.log(words[0] + " e " + words[1] + " sono della stessa lunghezza");
}
document.body.appendChild(text);
