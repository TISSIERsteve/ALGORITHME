// A VOIR AVEC FLORIAN *****************************************************
// const data = {
//   genre: [
//     {
//       id: "Tinuviel",
//       hauteur: 5,
//       folioles: 8
//     },
//     {
//       id: "Calaelen",
//       hauteur: 10,
//       folioles: 10
//     },
//     {
//       id: "Falarion",
//       hauteur: 8,
//       folioles: 5
//     },
//     {
//       id: "Dorthonion",
//       hauteur: 12,
//       folioles: 7
//     }
//   ]
// }
// const data = [
//   {
//     genre: "Tinuviel",
//     hauteur: 5,
//     folioles: 8,
//     correspond: true
//   },
//   {
//     genre: "Calaelen",
//     hauteur: 10,
//     folioles: 10,
//     correspond: true
//   },
//   {
//     genre: "Falarion",
//     hauteur: 8,
//     folioles: 5,
//     correspond: true
//   },
//   {
//     genre: "Dorthonion",
//     hauteur: 12,
//     folioles: 7,
//     correspond: true
//   }
// ];
// console.log(data);
// console.log(data[2]);
// console.log(data[1].hauteur);
// PARTIE DU DESSUS A VOIR AVEC FLORIAN ******************************************************************************

// Tableaux
// Je fais un tableaux pour mes valeurs

let array1 = ["Tinuviel", 5, 8];
let array2 = ["Calaelen", 10, 10];
let array3 = ["Falarion", 8, 5];
let array4 = ["Dorthonion", 12, 7];

// console.log(array1);
// console.log(array1[0]);
// console.log(array1[1]);
// console.log(array1[2]);

let h = parseInt(prompt("Veuillez renseigner la hauteur de l'arbre"), 10);
let f = parseInt(
  prompt("Veuillez renseigner le nombre de  folioles de l'arbre"),
  10
);

if (array1[1] == h && array1[2] == f) {
  alert("Cet  arbre est un Tinuviel");
} else if (array2[1] == h && array2[2] == f) {
  alert("Cet arbre est un Calaelen");
} else if (array3[1] == h && array3[2] == f) {
  alert("Cet arbre est un Falarion");
} else if (array4[1] == h && array4[2] == f) {
  alert("Cet arbre est un Dorthonion");
} else {
  alert("Cet arbre est non réfèrencer");
}
