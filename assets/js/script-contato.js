document.getElementById("btn-enviar").addEventListener("click", async function (event) {
  event.preventDefault();

  if (validateForm()) {
    // Coletar dados do formulário
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let description = document.getElementById("description").value.trim();

    // Gerar um ID único para o pedido
    let id = "id-" + new Date().getTime();

    // Salvar dados no LocalStorage através da "API"
    let contactData = {
      id: id,
      name: name,
      email: email,
      description: description,
    };

    await api.saveOrder(contactData);

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

    // Atualizar a lista de pedidos
    updateOrderList();
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

// Atualiza a lista de pedidos exibidos
async function updateOrderList() {
  let orderList = document.getElementById("order-list");
  orderList.innerHTML = ""; // Limpa a lista atual

  let orders = await api.getOrders();

  // Itera sobre todos os pedidos
  orders.forEach(order => {
    let orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
      <h3>ID: ${order.id}</h3>
      <p><strong>Nome:</strong> ${order.name}</p>
      <p><strong>E-mail:</strong> ${order.email}</p>
      <p><strong>Descrição do pedido:</strong> ${order.description}</p>
      <button onclick="editOrder('${order.id}')">Editar</button>
      <button onclick="deleteOrder('${order.id}')">Deletar</button>
    `;
    orderList.appendChild(orderItem);
  });
}

async function editOrder(id) {
  let contactData = JSON.parse(localStorage.getItem(id));

  // Preenche o formulário com os dados do pedido
  document.getElementById("name").value = contactData.name;
  document.getElementById("email").value = contactData.email;
  document.getElementById("description").value = contactData.description;

  // Remove o pedido do LocalStorage através da "API"
  await api.removeOrder(id);

  // Atualiza a lista de pedidos
  updateOrderList();
}

async function deleteOrder(id) {
  // Remove o pedido do LocalStorage através da "API"
  await api.removeOrder(id);

  // Atualiza a lista de pedidos
  updateOrderList();
}

// Atualiza a lista de pedidos ao carregar a página
window.onload = function () {
  updateOrderList();
};