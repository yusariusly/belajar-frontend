function cekUmur(umur) {
  if (umur < 17) {
    return "Belum cukup umur";
  }
  return "Boleh masuk";
}

let status = document.getElementById("status");
let input = document.getElementById("umurInput");
let cek = document.getElementById("cek");

cek.addEventListener("click", function () {
  let umur = Number(input.value);

  if (input.value === "") {
    status.innerText = "Masukkan umur dulu";
  } else {
    status.innerText = cekUmur(umur);
  }
});
