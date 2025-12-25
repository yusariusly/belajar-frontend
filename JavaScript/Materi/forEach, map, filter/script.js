//forEach
//let angka = [1, 2, 3];

for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}
angka.forEach(function(item) {
  console.log(item);
});


//map
//let angka = [1, 2, 3];

let hasil = angka.map(function(item) {
  return item * 2;
});

console.log(hasil);


//filter
//let angka = [1, 2, 3, 4, 5];

let genap = angka.filter(function(item) {
  return item % 2 === 0;
});

console.log(genap);


//versi modern (Arrow Function)
// let angka = [1, 2, 3, 4];

// let hasil = angka
//   .filter(n => n % 2 === 0)
//   .map(n => n * 10);

// console.log(hasil);



// 🔑 Ringkasannya (WAJIB HAFAL)
// Method	Gunanya
// forEach	ngulang
// map	ubah data → array baru
// filter	saring data