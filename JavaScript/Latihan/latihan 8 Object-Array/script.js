//latihan 1
let motor = {
  merk: "Honda",
  tipe: "Beat",
  tahun: 2022
};

console.log(motor.tipe);

//latihan 2
let angka = [5, 10, 15, 20];
console.log(angka[3]);

//latihan 3
let produk = [
  { barang: "laptop", harga:5000000 },
  { barang: "HP", harga: 3000000 }
];
console.log(produk[1].harga);

//latihan 4
let stok = 0;

if (stok === 0) {
  console.log("Stok habis");
} else {
  console.log("Stok tersedia");
}


//latihan 5
let hasil = document.getElementById ("hasil");
let inputData = document.getElementById ("inputData");
let simpan = document.getElementById ("simpan")

simpan.addEventListener ("click", function () {
  let input = inputData.value;

  if (input === "") {
    hasil.innerText = "Input tidak boleh kosong";
  }else {
    hasil.innerText = "Data tersimpan";
  }
  
});