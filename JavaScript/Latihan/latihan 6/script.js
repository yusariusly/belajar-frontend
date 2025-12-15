// ambil element dari HTML
const judul = document.getElementById("judul");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");

// status login
let isLogin = false;

// FUNCTION UNTUK UPDATE JUDUL
const updateJudul = (teks) => {
  judul.innerText = teks;
};

// EVENT LOGIN
loginBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "" || password === "") {
    updateJudul("Isi username & password dulu");
    return;
  }

  isLogin = true;
  updateJudul("Login berhasil, halo " + username);
});

// EVENT LOGOUT
logoutBtn.addEventListener("click", () => {
  isLogin = false;
  usernameInput.value = "";
  passwordInput.value = "";
  updateJudul("Belum Login");
});
