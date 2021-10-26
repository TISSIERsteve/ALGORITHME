// // PARTIE 2 EXERCICE 4

// // Je déclare mes variables
// let age = 25;
// let permis = 2;
// let accident0 = 0;
// let accident1 = 1;
// let accident2 = 2;
// let anciennete = 1;
// let bleu = "Tarif bleu";
// let vert = "Tarif vert";
// let orange = "Tarif orange";
// let rouge = "Tarif rouge";
// let refus = "La compagnie refuse de vous assurer";
// let situation = "Votre situation ne change pas vous conserver votre couleur";
// let situation1 = "Votre situation ne change";

// // Questionnaire du client
// let ageQ = prompt("Entrez votre age :");
// // console.log(ageQ);
// let PermQ = prompt("Entrez le nombre d'années de permis");
// // console.log(PermQ);
// let accQ = prompt("Entrez le nombre d'accidents :");
// // console.log(accQ);

// // Variables prête pour schéma
// let variables1 = ageQ < age && PermQ < permis && accQ == accident0;
// let variables2 = ageQ < age && PermQ > permis && accQ == accident0;
// let variables3 = ageQ < age && PermQ > permis && accQ == accident1;
// let variables4 = ageQ < age && PermQ > permis && accQ > accident1;
// let variables5 = ageQ > age && PermQ < permis && accQ == accident0;
// let variables6 = ageQ > age && PermQ < permis && accQ == accident1;
// let variables7 = ageQ > age && PermQ < permis && accQ > accident1;
// let variables8 = ageQ > age && PermQ > permis && accQ == accident0;
// let variables9 = ageQ > age && PermQ > permis && accQ == accident1;
// let variables10 = ageQ > age && PermQ > permis && accQ == accident2;
// let variables11 = ageQ > age && PermQ > permis && accQ > accident2;

// // Condition 1
// if (variables1) {
//   alert(`Vous avez le ${rouge}`);
// } else if (variables2) {
//   alert(`Vous avez le ${orange}`);
// } else if (variables3) {
//   alert(`Vous avez le ${rouge}`);
// } else if (variables4) {
//   alert(`${refus}`);
// } else if (variables5) {
//   alert(`Vous avez le ${orange}`);
// } else if (variables6) {
//   alert(`Vous avez le ${rouge}`);
// } else if (variables7) {
//   alert(`${refus}`);
// } else if (variables8) {
//   alert(`Vous avez le ${vert}`);
// } else if (variables9) {
//   alert(`Vous avez le ${orange}`);
// } else if (variables10) {
//   alert(`Vous avez le ${rouge}`);
// } else if (variables11) {
//   alert(`${refus}`);
// } else {
//   alert(`${refus}`);
// }

// // Encouragement pour les clients
// let assurQ = prompt("Entrez le nombre d'années d'assurance du client");
// // console.log(assurQ);

// // Variables prête pour schéma
// let variables1Bis = variables1 && assurQ > anciennete;
// let variables2Bis = variables2 && assurQ > anciennete;
// let variables3Bis = variables3 && assurQ > anciennete;
// let variables4Bis = variables4 && assurQ > anciennete;
// let variables5Bis = variables5 && assurQ > anciennete;
// let variables6Bis = variables6 && assurQ > anciennete;
// let variables7Bis = variables7 && assurQ > anciennete;
// let variables8Bis = variables8 && assurQ > anciennete;
// let variables9Bis = variables9 && assurQ > anciennete;
// let variables10Bis = variables10 && assurQ > anciennete;
// let variables11Bis = variables11 && assurQ > anciennete;

// // Condition 2
// if (variables1Bis) {
//   alert(`Vous étiez au ${rouge} vous passez maintenant au ${orange}`);
// } else if (variables2Bis) {
//   alert(`Vous étiez au ${orange} vous passez maintenant au ${vert}`);
// } else if (variables3Bis) {
//   alert(`Vous étiez au ${rouge} vous passez maintenant au ${orange}`);
// } else if (variables4Bis) {
//   alert(`${situation1}  ${refus}`);
// } else if (variables5Bis) {
//   alert(`Vous étiez au ${orange} vous passez maintenant au ${vert}`);
// } else if (variables6Bis) {
//   alert(`Vous étiez au ${rouge} vous passez maintenant au ${orange}`);
// } else if (variables7Bis) {
//   alert(`${situation1} ${refus}`);
// } else if (variables8Bis) {
//   alert(`Vous étiez au ${vert} vous passez maintenant au ${bleu}`);
// } else if (variables9Bis) {
//   alert(`Vous étiez au ${orange} vous passez maintenant au ${vert}`);
// } else if (variables10Bis) {
//   alert(`Vous étiez au ${rouge} vous passez maintenant au ${orange}`);
// } else if (variables11Bis) {
//   alert(`${situation1} ${refus}`);
// } else {
//   alert(`${situation1} `);
// }

// Je déclare mes variables

let age = prompt("Entrez votre age :");
let permis = prompt("Entrez le nombre d'années de permis");
let accident = prompt("Entrez le nombre d'accidents :");
let assurance = prompt("Entrez le nombre d'années d'assurance du client");

let choix1 = age < 25 && permis < 2 && accident == 0;
let choix2 = age < 25 && permis > 2 && accident == 0;
let choix3 = age < 25 && permis > 2 && accident == 1;
let choix4 = age < 25 && permis > 2 && accident > 1;
let choix5 = age > 25 && permis < 2 && accident == 0;
let choix6 = age > 25 && permis < 2 && accident == 1;
let choix7 = age > 25 && permis < 2 && accident > 1;
let choix8 = age > 25 && permis > 2 && accident == 0;
let choix9 = age > 25 && permis > 2 && accident == 1;
let choix10 = age > 25 && permis > 2 && accident == 2;
let choix11 = age > 25 && permis > 2 && accident > 2;

if (choix1 && assurance > 1) {
  alert("Votre couleur était rouge et devient orange");
} else if (choix1) {
  alert("Votre couleur est rouge");
}
if (choix2 && assurance > 1) {
  alert("Votre couleur était orange et devient vert");
} else if (choix2) {
  alert("Votre couleur est orange");
}
if (choix3 && assurance > 1) {
  alert("Votre couleur était rouge et devient orange");
} else if (choix3) {
  alert("Votre couleur est rouge");
}
if (choix4 && assurance > 1) {
  alert("refus");
} else if (choix4) {
  alert("refus");
}
if (choix5 && assurance > 1) {
  alert("Votre couleur était orange et devient vert");
} else if (choix5) {
  alert("Votre couleur est orange");
}
if (choix6 && assurance > 1) {
  alert("Votre couleur était rouge etdevient orange");
} else if (choix6) {
  alert("Votre couleur est rouge");
}
if (choix7 && assurance > 1) {
  alert("refus");
} else if (choix7) {
  alert("refus");
}
if (choix8 && assurance > 1) {
  alert("Votre couleur était vert et devient bleu");
} else if (choix8) {
  alert("Votre couleur est vert");
}
if (choix9 && assurance > 1) {
  alert("Votre couleur était orange et devient vert");
} else if (choix9) {
  alert("Votre couleur est orange");
}
if (choix10 && assurance > 1) {
  alert("Votre couleur était rouge et devient vert");
} else if (choix10) {
  alert("Votre couleur est rouge");
}
if (choix11 && assurance > 1) {
  alert("refus");
} else if (choix11) {
  alert("refus");
}
