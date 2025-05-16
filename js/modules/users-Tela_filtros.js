
    function alterarQuantidade(button, ajuste) {
      const input = button.closest('.acoes').querySelector('input');
      let quantidade = parseInt(input.value);
      quantidade = Math.max(1, quantidade + ajuste); // Impede que a quantidade seja menor que 1
      input.value = quantidade;
    }
