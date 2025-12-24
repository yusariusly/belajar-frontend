let status = document.getElementById("status");
let toggle = document.getElementById("toggle");

let nyala = false;

function ubahLampu() {
  nyala = !nyala; // membalik true ↔ false

  if (nyala) {
    status.innerText = "Lampu Nyala";
  } else {
    status.innerText = "Lampu Mati";
  }
}

toggle.addEventListener("click", function() {
  ubahLampu();
});
