let namaInput = document.getElementById("namaInput");
let kirim = document.getElementById ("kirim");
let nama = document.getElementById ("judul");
let reser = document.getElementById ("reset")

kirim.addEventListener ("click", function () {
    let isi = namaInput.value;

    if (isi === "") {
        nama.innerText = "Isi nama dulu";
    } else {
        nama.innerText = "Halo " + isi;
    }
});

reset.addEventListener ("click", function () {
    namaInput.value= "";
    nama.innerText = "Silakan masukkan nama";
})