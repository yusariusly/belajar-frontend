let status = document.getElementById("status");
let toggle = document.getElementById("toggle");
let reset = document.getElementById("reset");

let statusLampu = "mati";

function ubahStatus(statusSekarang) {
  if (statusSekarang === "Mati") {
    return "Nyala";
  }else {
    return "Mati";
  }
}

toggle.addEventListener("click", function() {
  statusLampu = ubahStatus(statusLampu);
  status.innerText = "Lampu " + statusLampu;
});

reset.addEventListener("click", function() {
  statusLampu = "mati";
  status.innerText = "Lampu Mati";
});