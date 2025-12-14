let judul = document.getElementById ("status");
let usernameInput = document.getElementById ("username");
let passwordInput = document.getElementById ("password");
let login = document.getElementById ("login");
let logout = document.getElementById ("logout");

let isLogin = false;

login.addEventListener("click", function () {
    let username = usernameInput.value;
    let password = passwordInput.value;
    if (username === "admin" && password === "123"){
        judul.innerText = "Login Berhasil";
        isLogin = true;
    }else {
        judul.innerText = "Username atau Password salah"
    }
});

logout.addEventListener("click", function () {
    isLogin = false;
    usernameInput.value = "";
    passwordInput.value = "";
    judul.innerText = "Belum Login";
})