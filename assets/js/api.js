// Função para obter todos os pedidos
function getOrders() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let orders = [];
        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          orders.push(JSON.parse(localStorage.getItem(key)));
        }
        resolve(orders);
      }, 1000); // Simula um atraso de 1 segundo
    });
  }
  
  // Função para salvar um pedido
  function saveOrder(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(order.id, JSON.stringify(order));
        resolve(order);
      }, 1000); // Simula um atraso de 1 segundo
    });
  }
  
  // Função para remover um pedido
  function removeOrder(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem(id);
        resolve(id);
      }, 1000); // Simula um atraso de 1 segundo
    });
  }
  
  // Exponha as funções para uso externo
  window.api = {
    getOrders,
    saveOrder,
    removeOrder,
  };
  