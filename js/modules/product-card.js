const template = document.createElement('template');
template.innerHTML = `
  <style>
    .product-card {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 360px;
      overflow: hidden;
      padding: 16px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
    }

    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .product-image {
      width: 80px;
      height: 80px;
      background-color: #f0f0f0;
      border-radius: 8px;
      margin-right: 12px;
      object-fit: cover;
    }

    .product-main-info {
      flex: 1;
    }

    .product-title {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      margin-bottom: 2px;
    }

    .product-category {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }

    .product-price {
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    .menu-button {
      background: none;
      border: none;
      font-size: 18px;
      color: #333;
      cursor: pointer;
      font-weight: bold;
    }

    .description-title {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 8px;
      color: #333;
    }

    .description-text {
      font-size: 13px;
      color: #666;
      margin-bottom: 16px;
      line-height: 1.4;
    }

    .product-stats {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      margin-top: 12px;
    }

    .stat-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      font-size: 14px;
    }

    .stat-row:not(:last-child) {
      border-bottom: 1px solid #e0e0e0;
    }

    .stat-label {
      color: #333;
      font-weight: 500;
    }

    .stat-value {
      display: flex;
      align-items: center;
      color: #333;
    }

    .stat-value .number {
      font-weight: 500;
    }

    .up-arrow {
      transform: rotate(-90deg);
      display: inline-block;
      margin-right: 4px;
    }

    .dash {
      display: inline-block;
      width: 16px;
      height: 2px;
      background-color: #333;
      margin-right: 4px;
      vertical-align: middle;
    }
  </style>
  <div class="product-card">
    <div class="product-header">
      <img src="" alt="Imagem do Produto" class="product-image">
      <div class="product-main-info">
        <h2 class="product-title"></h2>
        <p class="product-category"></p>
        <p class="product-price"></p>
      </div>
      <button class="menu-button">···</button>
    </div>
    <div class="product-description">
      <h3 class="description-title">Descrição</h3>
      <p class="description-text"></p>
    </div>
    <div class="product-stats">
      <div class="stat-row">
        <span class="stat-label">Vendas</span>
        <span class="stat-value">
          <span class="up-arrow">➔</span>
          <span class="number sales"></span>
        </span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Produtos em estoque</span>
        <span class="stat-value">
          <span class="dash"></span>
          <span class="number stock"></span>
        </span>
      </div>
    </div>
  </div>
`;

class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['image', 'title', 'category', 'price', 'description', 'sales', 'stock'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const el = this.shadowRoot;

    switch (name) {
      case 'image':
        el.querySelector('.product-image').src = newValue;
        break;
      case 'title':
        el.querySelector('.product-title').textContent = newValue;
        el.querySelector('.product-image').alt = newValue;
        break;
      case 'category':
        el.querySelector('.product-category').textContent = newValue;
        break;
      case 'price':
        el.querySelector('.product-price').textContent = newValue;
        break;
      case 'description':
        el.querySelector('.description-text').textContent = newValue;
        break;
      case 'sales':
        el.querySelector('.number.sales').textContent = newValue;
        break;
      case 'stock':
        el.querySelector('.number.stock').textContent = newValue;
        break;
    }
  }
}

customElements.define('product-card', ProductCard);
