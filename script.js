console.log("Halo JavaScript, aku mulai belajar");

let judul = document.getElementById("judul");
let tombol = document.getElementById("tombol");

let namaInput = document.getElementById("namaInput");
let tombolKirim = document.getElementById("kirim");

tombol.addEventListener("click", function () {
  judul.innerText = "Tombol atas diklik";
});

tombolKirim.addEventListener("click", function () {
  let nama = namaInput.value;
  judul.innerText = "Halo " + nama;
});
