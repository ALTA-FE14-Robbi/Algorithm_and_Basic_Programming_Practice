// Program Menghitung Luas Permukaan Tabung

// input tinggi tabung dan jari-jari tabung
let T = 20;
let r = 4;
// proses perhitungan (rumus), bisa menggunakan rumus A atau B karena hasil sama saja (disini menggunakan rumus A)
// ini rumus A
let Lp = 2 * 3.14 * r * r + 2 * 3.14 * r * T;
// ini rumus B
// let Lp = 2 * 3.14 * r * (r + T);

// output
console.log(Lp);
