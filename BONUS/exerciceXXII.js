// EXERCICE XXII
// Je déclare mes varaibles
let infosA = parseInt(prompt("Veuillez indiquez votre age svp"), 10);
let infosB = parseInt(prompt("Veuillez indiquez le poid de vos bagages"), 10);

let x = infosA >= 60;
let y = infosA >= 00 && infosA <= 10;
let z = infosA > 10 && infosA < 60;

if (x && infosB >= 0) {
  console.log("GRATUIT");
} else if (x) {
  console.log("GRATUIT");
}
if (y && infosB > 0) {
  console.log("5 écus");
} else if (y) {
  console.log("5 écus");
}
if (z && infosB >= 20) {
  console.log("50 écus");
} else if (z) {
  console.log("30 écus");
}
