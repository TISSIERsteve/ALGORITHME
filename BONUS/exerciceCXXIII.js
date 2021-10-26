// EXRCICE CXXIII
// Je deéclare mes variables
const result = document.getElementById("result");

let tarifsChambre = [
  { heure: 0, tarif: 10 },
  { heure: 1, tarif: 15 },
  { heure: 2, tarif: 20 },
  { heure: 3, tarif: 25 },
  { heure: 4, tarif: 30 },
  { heure: 5, tarif: 35 },
  { heure: 6, tarif: 40 },
  { heure: 7, tarif: 45 },
  { heure: 8, tarif: 50 },
  { heure: 9, tarif: 53 },
  { heure: 10, tarif: 53 },
  { heure: 11, tarif: 53 },
  { heure: 12, tarif: 53 }
];
// console.log(tarifsChambre[0]);
let ligne = prompt("Veuillez rensiegner votre heure d'arrivée");

let reservation = tarifsChambre.filter(function(x) {
  return x.heure == ligne;
});
// console.log(reservation[0].heure);
// console.log(reservation[0].tarif);
let reponse = reservation[0].tarif;
let reponse1 = reservation[0].heure;
result.innerHTML = `Le prix de la réservation à partir de ${reponse1} heure(s) de l'aprés-midi sera de ${reponse} piéces`;
