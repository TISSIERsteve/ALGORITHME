// PARTIE 3 EXERCICE 1

// Je déclare mes variables;
let infos1 = "Merci de mettre des chiffres !";
let infos2 = "DECOLLAGE !";
let infos3 = "Secondes avant decollage !";
let infos4 = "ATTENTION";

// Functions
function valider() {
  let choix = document.getElementById("choix").value;
  const affiche = document.getElementById("affiche");
  const affiche1 = document.getElementById("affiche1");
  //   console.log(choix);

  if (isNaN(choix)) {
    alert(`${infos1}`);
  } else {
    let start = choix;
    // console.log(start);

    setInterval(decompte, 1000);

    function decompte() {
      let seconds = start;
      //   console.log(seconds);

      affiche.innerHTML = `${seconds}
      ${infos3}`;
      if (start > 0) {
        start--;
        // console.log("ATTENTION ATTENTION");
        affiche1.innerHTML = `${infos4}`;
      } else {
        affiche.innerHTML = `${infos2}`;
      }
    }
  }
}
