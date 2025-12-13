let judul = document.getElementById("judul");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let reset = document.getElementById("reset");

let count = 0;

// tampilkan nilai awal
judul.innerText = count;

// tombol +
tambah.addEventListener("click", function () {
    count = count + 1;
    judul.innerText = count;
});

// tombol -
kurang.addEventListener("click", function () {
    if (count > 0) {
        count = count - 1;
        judul.innerText = count;
    }
});

// tombol reset
reset.addEventListener("click", function () {
    count = 0;
    judul.innerText = count;
});
