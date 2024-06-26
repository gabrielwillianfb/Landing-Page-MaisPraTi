document.getElementById("btn-enviar").addEventListener("click", function (event) {
  event.preventDefault();

  if (validateForm()) {
    var modal = document.getElementById("modal");
    var modalMessage = document.getElementById("modal-message");
    modal.style.display = "block";
    modalMessage.textContent = "Obrigado por entrar em contato! Responderemos em breve.";

    document.querySelector(".contact-form form").reset();
  }
});

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
