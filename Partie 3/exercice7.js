// EXERCICE 7
let total = 0;
const keypress = document.body;
const span = document.getElementById("span");

keypress.addEventListener("keypress", e => {
  let x = total++;
  let result = Math.trunc(x * 100 / total) + " %";

  span.innerHTML = result;
});
