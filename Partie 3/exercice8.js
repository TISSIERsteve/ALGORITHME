// EXERCICE 8
const buttons = document.querySelectorAll(".btn");
const resultat = document.getElementById("resultat");
// Affichage prix
const un = document.getElementById("un");
const deux = document.getElementById("deux");
const trois = document.getElementById("trois");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    resultat.textContent += e.target.id;
  });
});

egal.addEventListener("click", () => {
  resultat.textContent = eval(resultat.textContent);
  un.textContent = eval(resultat.textContent) + " €";
  resultat.textContent = "";
  resultat.textContent = " monnaie du client";
});

egal.addEventListener("click", () => {
  console.log("yes");
});

effacer.addEventListener("click", () => {
  un.textContent = "";
  deux.textContent = "";
  trois.textContent = "";
});
