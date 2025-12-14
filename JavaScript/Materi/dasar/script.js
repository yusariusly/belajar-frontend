console.log("Halo JavaScript, aku mulai belajar");

let judul = document.getElementById("judul");
let tombol = document.getElementById("tombol");

let namaInput = document.getElementById("namaInput");
let tombolKirim = document.getElementById("kirim");

let sudahDiKlik = false;

tombol.addEventListener("click", function() {
    judul.innerText = "Tombol atas di klik";
});

tombolKirim.addEventListener("click", function () {
    let nama = namaInput.value;

    if (nama === "") {
        judul.innerText = "Nama tidak boleh kosong";
    } else{
        judul.innerText = "Halo " + nama;
    }
});

tombol.addEventListener("click", function () {
    if (sudahDiKlik === false) {
        judul.innerText = "Tombol sudah diklik";
        sudahDiKlik = true;
    } else {
        judul.innerText = "Klik lagi dong";
        sudahDiKlik = false;
    }
});