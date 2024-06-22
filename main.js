//Evento
document.getElementById("loginform").addEventListener("submit", (event) => {
  //Chamando os Id dos input's
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value.trim();

  let emailField = document.getElementById("email");
  let senhaField = document.getElementById("senha");
  let alertEmail = document.getElementById("alertEmail");
  let alertSenha = document.getElementById("alertSenha");

  //Reseta as cores
  emailField.style.borderColor = "blueviolet";
  senhaField.style.borderColor = "blueviolet";
  alertEmail.innerText = "";
  alertSenha.innerText = "";

  //A borda do campo ficará vermelha caso esteja com um valor vazio
  if (email === '') {
    emailField.style.borderColor = "red";
    alertEmail.innerText = "Preencha o campo"
    event.preventDefault(); // => Não envia o formulario caso não tenha preenchido os campos
  }

  if (senha === '') {
    senhaField.style.borderColor = "red";
    alertSenha.innerText = "Senha Incorreta";
    event.preventDefault(); // => Não envia o formulario caso não tenha preenchido os campos
  }

})