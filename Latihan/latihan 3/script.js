let stamina = document.getElementById ("staminaText");
let lari = document.getElementById ("lari");
let istirahat = document.getElementById ("istirahat");
let reset = document.getElementById ("reset");

let sta = 10;

stamina.innerText = "Stamina: " + sta;

lari.addEventListener("click", function () {
    if (sta > 0) {
        sta = sta - 1;
        stamina.innerText = "Stamina: " + sta;
    }
});

istirahat.addEventListener("click", function () {
    if (sta < 10) {
        sta = sta + 1;
        stamina.innerText = "Stamina: " + sta;
    }
});

reset.addEventListener("click", function () {
    sta = 10 
    stamina.innerText = "Stamina: " + sta;
});