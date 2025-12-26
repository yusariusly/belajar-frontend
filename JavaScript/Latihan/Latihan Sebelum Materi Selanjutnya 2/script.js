// 1. Array angka
let angka = [1, 2, 3, 4, 5, 6];

// 2. Function cek genap
function cekGenap(n) {
  return n % 2 === 0;
}
console.log(cekGenap(2));

// 3. Filter angka genap
let genap = angka.filter(function(item) {
  return  item % 2 === 0;
});

// 4. Kalikan angka genap ×2
let hasil = genap.map(function(item) {
  return item * 2;
});

// 5. Tampilkan hasil
console.log(hasil);
