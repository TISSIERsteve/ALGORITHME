// PARTIE 2 EXERCICE 2

// 1er essai

// Je déclare mes variables premiére façon
// let homme = 21;
// let femme = "";

// if (femme > 18 && femme < 36) || homme > 20) {
//   console.log(imposable);
// } else {
//   console.log(nonImposable);
// }

// 2e essai
// // Je déclare mes variables deuxième façon
// let imposable = "Vous êtes imposable";
// let nonImposable = "Vous êtes non imposable";
// let exonorer = "Vous ne payez pas d'impôts";

// // Texte affichage
// let genre = prompt("Choissisez votre sexe homme ou femme").toLowerCase();
// let age = prompt("Quel age avez vous");

// // Résultat
// switch (genre) {
//   case "homme":
//     if (age >= 20) {
//       alert(`${imposable}`);
//       break;
//     }

//   case "femme":
//     if (age >= 18 && age <= 36) {
//       alert(`${imposable}`);
//       break;
//     }

//   default:
//     alert(`${exonorer}`);
// }

// CORRIGER
// 3e essai
const genre = prompt("Veullez saisir un genre : homme ou femme").toLowerCase();
const age = parseInt(prompt("Veuillez saisir l'age"), 10);

// if (genre === "homme" && age > 20) {
//   console.log("IMPOSSABLE");
// } else if (genre === "femme" && age > 18 && age < 35) {
//   console.log("IMPOSSABLE");
// } else {
//   console.log(" NON IMPOSSABLE");
// }

// OU
// 4e essai
const impotHomme = genre === "homme" && age > 20;
const impotFemme = genre === "femme" && age > 18 && age < 35;

if (impotHomme || impotFemme) {
  console.log("Impossable");
} else {
  console.log("Non Impossable");
}
