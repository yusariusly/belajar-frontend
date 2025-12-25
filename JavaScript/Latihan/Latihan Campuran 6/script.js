let hasil = document.getElementById("hasil");
let angkaInput = document.getElementById("angkaInput");
let cek = document.getElementById("cek");

cek.addEventListener("click", function () {
  let angka = angkaInput.value;

  if (angka === "") {
    hasil.innerText = "Masukkan angka dulu";
  } 
  else if (angka % 2 === 0) {
    hasil.innerText = "Genap";
  } 
  else {
    hasil.innerText = "Ganjil";
  }
});
