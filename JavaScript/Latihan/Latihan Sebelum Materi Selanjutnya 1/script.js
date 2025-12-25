//latihan 1
function sapa(nama) {
    return "Halo, "+ nama;
}
console.log(sapa("Yusar"));

//latihan 2
let angka = [2, 4, 6, 8];

for (i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}
angka.forEach(function(item) {
    console.log(item);
});

//latihan 3
let user = {
  nama: "Budi",
  umur: 21,
  kota: "Bandung"
};

function tampil({nama, kota}) {
    console.log(nama);
    console.log(kota);
}
tampil(user);