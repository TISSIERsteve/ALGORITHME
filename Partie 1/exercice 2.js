// PARTIE 1 EXERCICE 2

// Je déclare mes variables
let distributeursBonbons = 3;

let classe1 = 25;
let classe2 = 30;
let classe3 = 27;
let classe4 = 22;
let absenceEleves = 8;

// Résultat Total des Bonbons
let classeTotal = classe1 + classe2 + classe3 + classe4;
// console.log(classeTotal);

let classeTotalEleve = classeTotal - absenceEleves;
// console.log(classeTotalEleve);

let bonbonDistribuer = classeTotalEleve * distributeursBonbons;
// console.log(bonbonDistribuer);

alert(`Le nombre de bonbons à distribuer sont de ${bonbonDistribuer} . `);
