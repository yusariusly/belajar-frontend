let judul = document.getElementById ("judul");
let namaInput = document.getElementById ("namaInput");
let kirim = document.getElementById ("kirim");

kirim.addEventListener ("click", function () {
  let nama = namaInput.value;

  if (nama === "") {
    judul.innerText = "Isi dulu";
  }else {
    judul.innerText = "Halo " + nama;
  }
});

function cekUmur(umur) {
  if (umur < 17) {
    return "Belum cukup umur";
  } else {
    return "Boleh masuk";
  }
}
console.log(cekUmur(16));
console.log(cekUmur(20));
