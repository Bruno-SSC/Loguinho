
const loginBtn = document.getElementById("login-btn");
const regisBtn = document.getElementById("regis-btn");

loginBtn.addEventListener("click", validation);
regisBtn.addEventListener("click", validation);

function validation() {
  if (this == loginBtn) {

    const user = document.getElementById("user");
    const password = document.getElementById("password");

    // Por qual validação a senha e o user vão passar?

  } else if (this == regisBtn) {

    // Como cadastrar o usuário no bd?

  } else {
    alert("O tiro saiu pela culatra");
  }
}
