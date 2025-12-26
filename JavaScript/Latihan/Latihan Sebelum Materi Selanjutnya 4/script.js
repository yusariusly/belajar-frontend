let produk = [
  { nama: "Laptop", harga: 7000000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 },
  { nama: "Monitor", harga: 2500000 }
];


let mahal = produk.filter(function(item) {
  return item.harga >= 500000;
});
console.log(mahal);



let namaProduk = mahal.map(function(item) {
  return item.nama;
});
console.log(namaProduk);



function hitungDiskon(harga) {
  if(harga >= 1000000){
    return harga * 0.9;
  }else {
    return harga;
  }
}
console.log(hitungDiskon(7000000)); // 6300000
console.log(hitungDiskon(150000));  // 150000


let hargaAkhir = mahal.map(function(item) {
  return {
    nama: item.nama,
    harga: hitungDiskon(item.harga)
  };
});
console.log(hargaAkhir);