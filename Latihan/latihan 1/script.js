let judul = document.getElementById ("judul");
let namaInput = document.getElementById ("namaInput");
let kirim = document.getElementById ("kirim");
let reset = document.getElementById ("reset");

kirim.addEventListener("click", function () {
    let nama = namaInput.value;

    if (nama === "") {
        judul.innerText = "Tolong Isi Terlebih Dahulu!!!";
    } else {
        judul.innerText = "Selamat Datang " + nama;
    }
});

reset.addEventListener("click", function () {
    namaInput.value = "";
    judul.innerText = "Silakan masukkan nama";
});