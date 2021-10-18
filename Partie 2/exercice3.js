// PARTIE 2 EXERCICE 3

// Je déclare mes variables
// Affichage texte
let heure = prompt(
  "Quelle heure est-il (Afficher les chiffres à la suite sans virgule ex : 000000) ?"
);
// console.log(heure[0]);

let affichageHeure = alert(
  `Il est ${heure[0]}${heure[1]} Heure(s) et ${heure[2]}${heure[3]} minute(s) et ${heure[4]}${heure[5]} seconde(s)`
);
// console.log(affichageHeure);

// Je mets heure/minutes/secondes en secondes
let he = heure[0].concat(heure[1]) * 3600;
// console.log(he);

let mi = heure[2].concat(heure[3]) * 60;
// console.log(mi);

let se = heure[4].concat(heure[5]) * 1;
// console.log(se);

let ajout = 1;

// Total en secondes avec l'ajout d'une seconde dans le futur
let tempsSecondes = he + mi + se + ajout;
// console.log(tempsSecondes);

// Je retransforme mes secondes en heures/minutes/secondes
// Pour avoir les heures
let heure2 = tempsSecondes / 3600;
// console.log(Math.trunc(heure2));
let heure2Entier = Math.trunc(heure2);
let heureDecimal = heure2 % 1;
// console.log(heureDecimal);

// Pour avoir les minutes
let minutes2 = heureDecimal * 60;
// console.log(Math.trunc(minutes2));
let minutesEntier = Math.trunc(minutes2);
let minuteDecimal = minutes2 % 1;
// console.log(minuteDecimal);

// Pour avoir les secondes
let secondes2 = minuteDecimal * 60;
// console.log(Math.trunc(secondes2));
let secondesEntier = Math.trunc(secondes2);

// Régle si on passe 23h 59min et 59s
let minuit = "00";
let minuitMinutes = "00";
let minuitSecondes = "00";

if (heure2Entier > 23) {
  alert(
    `Dans 1 seconde il sera : ${minuit} minuit ${minuitMinutes} minute(s) ${minuitSecondes} seconde(s)
     "Vous venez d'avancer d'une seconde dans le temps"`
  );
} else {
  alert(
    `Dans 1 secondes il sera :" ${heure2Entier} heure(s) et ${minutesEntier} minute(s) ${secondesEntier} seconde(s).
       "Vous venez d'avancer d'une seconde dans le temps"`
  );
}
