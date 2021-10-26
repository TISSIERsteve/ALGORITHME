// PARTIE 3 EXERCICE 4

let cube = 17;
let iteration = 1;
let y = 0;

while (cube >= 1) {
  if (cube == 17) {
    console.log(
      "Il faudra pour le " +
        iteration +
        "er rang : " +
        (cube ** 3 + y) +
        " " +
        "cubes en bois"
    );
  } else {
    console.log(
      "Il faudra aprés pour le " +
        +iteration +
        "e" +
        " " +
        "rang : " +
        (cube ** 3 + y) +
        " " +
        "cube(s) en bois"
    );
  }
  ++iteration;
  cube = cube - 2;
}
