let mode = document.getElementById ("status");
let toggle = document.getElementById ("toggle");
let reset = document.getElementById ("reset");

let sudahDiKlik = false;

toggle.addEventListener ("click", function () {
    if(sudahDiKlik === false){
        mode.innerText = "Mode : ON"
        sudahDiKlik = true;
    } else {
        mode.innerText = "Mode : OFF"
        sudahDiKlik = false;
    }
});

reset.addEventListener ("click", function () {
    sudahDiKlik = false;
    mode.innerText = "Mode : OFF"
})