const statusText = document.getElementById("status");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");

const updateStatus = (text) => {
  statusText.innerText = text;
};

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "" || password === "") {
    updateStatus("Isi data terlebih dahulu");
    return;
  }

  updateStatus("Login berhasil, halo " + username);
});

logoutBtn.addEventListener("click", () => {
  usernameInput.value = "";
  passwordInput.value = "";
  updateStatus("Belum Login");
});
