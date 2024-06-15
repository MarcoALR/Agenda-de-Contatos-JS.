document.getElementById("btLogin").addEventListener("click", function (event) {
  event.preventDefault(); // Impede a navegação padrão do botão

  // Pega os valores dos campos de entrada
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Referências para os elementos de erro
  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("senhaError");
  const generalError = document.getElementById("generalError");

  // Remove mensagens de erro e classes de erro
  emailError.style.display = "none";
  senhaError.style.display = "none";
  generalError.style.display = "none";
  document.getElementById("usuario").classList.remove("error");
  document.getElementById("senha").classList.remove("error");

  // Verifica se os campos foram preenchidos
  if (usuario === "" && senha === "") {
    generalError.textContent = "Nenhum dos campos foi preenchido";
    generalError.style.display = "block";
  } else {
    let hasError = false;

    // Verifica o campo de email
    if (usuario !== "admin") {
      emailError.textContent = "Usuário incorreto";
      emailError.style.display = "block";
      document.getElementById("usuario").classList.add("error");
      hasError = true;
    }

    // Verifica o campo de senha
    if (senha !== "admin") {
      senhaError.textContent = "Senha incorreta";
      senhaError.style.display = "block";
      document.getElementById("senha").classList.add("error");
      hasError = true;
    }

    // Se não houver erros, redireciona para a página home.html
    if (!hasError) {
    location.href = "index.html";
    }
  }
});
