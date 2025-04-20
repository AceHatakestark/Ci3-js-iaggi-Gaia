const nombreMystere = Math.floor(Math.random() * 100) + 1;

let proposition;
let essais = 0;

while (true) {
  proposition = prompt("Devine le nombre entre 1 et 100 :");
  essais++;

  const nombreDevine = parseInt(proposition, 10);

  if (isNaN(nombreDevine)) {
    alert("Entrez un nombre valide.");
    continue;
  }

  if (nombreDevine < nombreMystere) {
    alert("Trop petit !");
  } else if (nombreDevine > nombreMystere) {
    alert("Trop grand !");
  } else {
    alert(`Bravo chouchou ! Tu as deviné le nombre en ${essais} essai(s).`);
    break;
  }
}