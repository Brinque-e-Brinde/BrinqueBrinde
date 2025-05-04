/**
 * Script para o componente de listagem de produtos
 */

// Dados de exemplo dos produtos
const products = [
    {
        id: '#25421',
        name: 'Lorem ipsum',
        quantity: 2,
        price: 100.00
    },
    {
        id: '#25421',
        name: 'Lorem ipsum',
        quantity: 2,
        price: 100.00
    },
    {
        id: '#25421',
        name: 'Lorem ipsum',
        quantity: 2,
        price: 100.00
    },
    {
        id: '#25421',
        name: 'Lorem ipsum',
        quantity: 2,
        price: 100.00
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Renderiza os produtos na tabela
    renderProducts();
    
    // Adiciona listener para o botão de opções
    document.querySelector('.more-options').addEventListener('click', function() {
        console.log('Opções clicadas');
        // Implementar menu de opções aqui
    });
});

/**
 * Renderiza os produtos na tabela
 */
function renderProducts() {
    const productsContainer = document.getElementById('productsContainer');
    
    // Limpa o container antes de adicionar novos produtos
    productsContainer.innerHTML = '';
    
    // Adiciona cada produto à tabela
    products.forEach(product => {
        // Cria a linha do produto
        const productRow = document.createElement('div');
        productRow.className = 'product-row';
        
        // Define o conteúdo da linha
        productRow.innerHTML = `
            <div class="checkbox-cell">
                <input type="checkbox" class="product-checkbox">
            </div>
            <div class="product-name">
                <div class="product-image"></div>
                ${product.name}
            </div>
            <div class="product-id">${product.id}</div>
            <div class="product-qty">${product.quantity}</div>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
        `;
        
        // Adiciona a linha ao container
        productsContainer.appendChild(productRow);

        // Adiciona event listener para o checkbox
        const checkbox = productRow.querySelector('.product-checkbox');
        checkbox.addEventListener('change', function() {
            updateSelectedProductsCount();
        });
    });
    
    // Atualiza os valores de resumo
    updateSummary();
}

/**
 * Atualiza os valores do resumo (subtotal, desconto, etc.)
 */
function updateSummary() {
    const itemPrice = 100.00;
    const itemCount = 4;
    const subtotal = itemPrice;
    const discount = 0.00;
    const shipping = 0.00;
    const total = subtotal * itemCount;
    
    // Atualiza os elementos com os valores calculados
    document.getElementById('subtotalValue').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('discountValue').textContent = `R$ ${discount.toFixed(2)}`;
    document.getElementById('shippingValue').textContent = `R$ ${shipping.toFixed(2)}`;
    document.getElementById('totalValue').textContent = `R$ ${total.toFixed(2)}`;
}

/**
 * Atualiza a contagem de produtos selecionados
 */
function updateSelectedProductsCount() {
    const selectedCount = document.querySelectorAll('.product-checkbox:checked').length;
    console.log(`${selectedCount} produtos selecionados`);
    // Implementar ações baseadas na seleção, se necessário
}