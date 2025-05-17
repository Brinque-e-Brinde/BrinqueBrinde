//Carregar os produtos do JSON e criar cards para cada produto encontrado
fetch('../../data/produtos.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('produtos');
        data.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <div class="image-container">
              <img src="${produto.imagem}" alt="Produto ${produto.id}">
              <div class="favorite">❤️</div>
            </div>
            <div class="card-content">
              <div class="description">${produto.descricao}</div>
              <div class="price">R$ ${produto.preco.toFixed(2)}</div>
              <div class="bottom-row">
                <div class="quantity-selector">
                  <button>-</button>
                  <input type="number" value="1" min="1">
                  <button>+</button>
                </div>
                <button class="add-button">Adicionar</button>
              </div>
            </div>
          `;
            container.appendChild(card);
        });
    })
    .catch(err => console.error('Erro ao carregar produtos:', err));

    //Banner rotatório
    const imagens = document.querySelectorAll('#banner img');
    let index = 0;

    setInterval(() => {
      imagens[index].classList.remove('active');
      index = (index + 1) % imagens.length;
      imagens[index].classList.add('active');
    }, 3000);
