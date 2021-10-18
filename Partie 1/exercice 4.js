// PARTIE 1 EXERCICE 4

// Je déclare mes variables
let baton1 = 17;
let baton2 = 7;
let baton3 = 5;
let baton4 = 2;
let uniteDeMesureMl = "ml";
let uniteDeMesureM2 = "m2";

// Résultat Longueur d'un côté du carré
let longueurCote = baton1 * 5 + baton2 * 2 + baton3 * 1 + baton4 * 2;
// console.log(longueurCote);

alert(
  `La longueur d'un côté du carré est de : ${longueurCote} ${uniteDeMesureMl}`
);

// Surface de la cour
let surfaceCour = longueurCote * 2;
// console.log(surfaceCour);

alert(`La surface de la cour est de : ${surfaceCour} ${uniteDeMesureM2}`);

// Périmètre de la cour
let PerimetreCour = longueurCote + longueurCote + longueurCote + longueurCote;
// console.log(PerimetreCour);

alert(`Le périmètre de la cour est de : ${PerimetreCour} ${uniteDeMesureMl}`);
