document.getElementById("btn-enviar").addEventListener("click", function (event) {
  event.preventDefault();

  if (validateForm()) {
    let modal = document.getElementById("modal");
    let modalMessage = document.getElementById("modal-message");
    modal.style.display = "block";
    modalMessage.textContent = "Obrigado por entrar em contato! Responderemos em breve.";

    document.querySelector(".contact-form form").reset();
  }
});

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return false;
  }

  if (message.length < 10) {
    alert("Por favor, insira uma mensagem válida (mínimo de 10 caracteres).");
    return false;
  }

  return true;
}

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
