let judul = document.getElementById("judul");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let reset = document.getElementById("reset");

// STATE (mirip useState di React)
let count = 0;

// FUNCTION render (mirip render React)
function render(angka, tombol) {
  if (angka === "tambah") {
    return + 1;
  }
  if(angka === "kurang") {
    return - 1;
  }
  if(angka === "reset") {
    return 0; 
  }
};

// EVENT
tambah.addEventListener("click", function() {
  count = render(count, "tambah");
  judul.innerText = count;
});

kurang.addEventListener("click", function() {
  count = render(count, "kurang");
  judul.innerText = count;
});

reset.addEventListener("click", function() {
  count = render(count, "reset");
  judul.innerText = count;
});
