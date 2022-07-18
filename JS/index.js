import * as backend from '../backend/index.js'

const loginBtn = document.getElementById("login-btn");
const regisBtn = document.getElementById("regis-btn");

loginBtn.addEventListener("click", validation);
regisBtn.addEventListener("click", validation);

function validation() {

  const user = document.getElementById("user");
  const password = document.getElementById("password");

  if (this == loginBtn) {

    backend.login(user, password)

  } else if (this == regisBtn) {

    backend.registro(user, password)

  } else {
    alert("O tiro saiu pela culatra");
  }
}
