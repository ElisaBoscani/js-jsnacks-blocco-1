/* L’utente inserisce due parole in successione, 
con due prompt.
Il software stampa prima la parola più corta, 
poi la parola più lunga. */

const firstWord = prompt("Inserisci una parola");
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
document.body.appendChild(text);
