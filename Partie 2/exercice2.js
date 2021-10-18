// PARTIE 2 EXERCICE 2

// Je déclare mes variables premiére façon
// let homme = 21;
// let femme = "";

// if (femme > 18 && femme < 36) || homme > 20) {
//   console.log(imposable);
// } else {
//   console.log(nonImposable);
// }

// Je déclare mes variables deuxième façon
let imposable = "Vous êtes imposable";
let nonImposable = "Vous êtes non imposable";
let exonorer = "Vous ne payez pas d'impôts";

// Texte affichage
let genre = prompt("Choissisez votre sexe homme ou femme").toLowerCase();
let age = prompt("Quel age avez vous");

// Résultat
switch (genre) {
  case "homme":
    if (age >= 20) {
      alert(`${imposable}`);
      break;
    }

  case "femme":
    if (age >= 18 && age <= 36) {
      alert(`${imposable}`);
      break;
    }

  default:
    alert(`${exonorer}`);
}
