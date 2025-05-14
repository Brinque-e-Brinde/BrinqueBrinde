/**
 * Função para carregar dados do produto no card
 * @param {Object} productData - Dados do produto a serem exibidos
 * @param {string} productData.title - Título do produto
 * @param {string} productData.category - Categoria do produto
 * @param {number} productData.price - Preço do produto
 * @param {string} productData.description - Descrição do produto
 * @param {number} productData.sales - Número de vendas
 * @param {number} productData.stock - Quantidade em estoque
 */
export function loadProductData(productData) {
    document.getElementById('product-title').textContent = productData.title;
    document.getElementById('product-category').textContent = productData.category;
    document.getElementById('product-price').textContent = `R$ ${productData.price.toFixed(2).replace('.', ',')}`;
    document.getElementById('product-description').textContent = productData.description;
    document.getElementById('product-sales').textContent = productData.sales;
    document.getElementById('product-stock').textContent = productData.stock;
}

/**
 * Inicializa o componente de card de produto
 */
function initProductCard() {
    // Exemplo de uso com dados de amostra
    // Em um ambiente real, esses dados viriam de uma API ou banco de dados
    const sampleProduct = {
        title: "Kit Festa Unicórnio",
        category: "Decoração Infantil",
        price: 149.90,
        description: "Kit completo de decoração com tema unicórnio, incluindo balões, toalha de mesa, pratos, copos e talheres descartáveis.",
        sales: 1269,
        stock: 10
    };

    // Carrega dados de exemplo
    loadProductData(sampleProduct);

    // Adiciona funcionalidade ao botão de menu (três pontos)
    document.querySelector('.menu-button').addEventListener('click', function() {
        alert('Menu de opções do produto');
        // Aqui você pode implementar um menu dropdown com opções
        // como editar, excluir, etc.
    });
}

// Inicializa o componente quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initProductCard);