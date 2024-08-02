document.getElementById("btn-enviar").addEventListener("click", function (event) {
  event.preventDefault();

  if (validateForm()) {
    // Coletar dados do formulário
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let description = document.getElementById("description").value.trim();

    // Gerar um ID único para o pedido
    let id = "id-" + new Date().getTime();

    // Salvar dados no LocalStorage
    let contactData = {
      id: id,
      name: name,
      email: email,
      description: description,
    };
    localStorage.setItem(id, JSON.stringify(contactData));

    // Mostrar dados no modal
    let modal = document.getElementById("modal");
    let modalMessage = document.getElementById("modal-message");

    modalMessage.innerHTML = `
      Obrigado por entrar em contato!<br>
      Essas são as informações do seu pedido:<br><br>
      <p>ID: ${id}</p>
      <p>Nome: ${name}</p>
      <p>E-mail: ${email}</p>
      <p>Descrição do pedido: ${description}</p><br>
      Entraremos em contato em breve.
    `;
    modal.style.display = "block";

    // Resetar formulário
    document.querySelector(".contact-form form").reset();
  }
});

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let description = document.getElementById("description").value.trim();

  if (name.length < 3) {
    alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return false;
  }

  if (description.length < 10) {
    alert("Por favor, insira uma descrição válida (mínimo de 10 caracteres).");
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
