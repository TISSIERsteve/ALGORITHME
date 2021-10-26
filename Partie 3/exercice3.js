// Sans boucle juste avec calcul
z = 6;
let tir2 = z * (1 + z) / 2;
console.log(tir2);

// 1 er essai
let b = 5;
let a;
do {
  a = b * (1 + b) / 2;
} while (b > 10);
console.log(b, a);

// 2 eme essai
let bonbon = 0;
for (let i = 1; i <= 50; i++) {
  bonbon += i;
}
console.log(bonbon);
