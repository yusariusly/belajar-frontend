let angka = document.getElementById("angka");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let reset = document.getElementById("reset");

let nilai = 0;

function ubahAngka(nilaiSekarang, aksi) {
  if (aksi === "tambah"){
    return nilaiSekarang + 1;
  }
  if (aksi === "kurang"){
    return nilaiSekarang - 1;
  }
  if (aksi === "reset"){
    return 0;
  }
}

tambah.addEventListener("click", function() {
  nilai = ubahAngka(nilai, "tambah");
  angka.innerText = nilai;
});

kurang.addEventListener("click", function() {
  nilai = ubahAngka(nilai, "kurang");
  angka.innerText = nilai;
});

reset.addEventListener("click", function() {
  nilai = ubahAngka(nilai, "reset");
  angka.innerText = nilai;
});