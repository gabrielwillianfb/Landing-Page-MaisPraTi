document.getElementById("btn-enviar").addEventListener("click", function (event) {
  event.preventDefault();

  // Exibir o modal
  var modal = document.getElementById("modal");
  var modalMessage = document.getElementById("modal-message");
  modal.style.display = "block";
  modalMessage.textContent = "Obrigado por entrar em contato! Responderemos em breve.";

  // Limpar o formulário
  document.querySelector(".contact-form form").reset();
});

// Fechar o modal ao clicar no botão de fechar
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Fechar o modal ao clicar fora dele
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
