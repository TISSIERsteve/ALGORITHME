// EXERCICE CXII
let ref = 10;
let champs1Champs2 = prompt(
  "Veuillez renseigner la taille des champs avec une virgule entre ex (42,24)"
);
// console.log(champs1Champs2);

// split() serre à faire du découpage
let decoupage = champs1Champs2;
let decoupe1 = decoupage.split(",");

let champs1 = decoupe1[0];
console.log(champs1);

let champs2 = decoupe1[1];
console.log(champs2);

// Résultat
if (champs1 - champs2 > ref) {
  alert("La famille Ervaran a un champs trop grand");
} else if (champs2 - champs1 > ref) {
  alert("La famille Avignon a un champs trop grand");
} else {
  alert("Les pars sont équitables !!!");
}
