
// Função para alternar a visibilidade do formulário Novo Produto
function toggleForm() {
  const form = document.getElementById('formNovoProduto');
  form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}

// Função para carregar conteúdo de arquivos HTML
async function loadContent(section) {
  const content = document.getElementById('content');
  
  try {
    const response = await fetch(`sections/${section}.html`);
    if (!response.ok) throw new Error('Erro ao carregar a página');
    
    const html = await response.text();
    content.innerHTML = html;

    if (section === 'produtos') {
      fetch('../../data/pedidos.json')
        .then(res => res.json())
        .then(produtos => {
                  const lista = document.getElementById('listaPedidos');
          const pagination = document.getElementById('pagination');
          const btnCadastrar = document.querySelector('.btn-submit');

          let currentPage = 1;
          const itemsPerPage = 6;
          const totalPages = Math.ceil(produtos.length / itemsPerPage);

          function renderPage(page) {
            lista.innerHTML = '';
            pagination.innerHTML = '';
            currentPage = page;

            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const currentItems = produtos.slice(start, end);

            currentItems.forEach(produto => {
              const card = document.createElement('product-card');
              Object.entries(produto).forEach(([key, value]) => {
                card.setAttribute(key, value);
              });
              lista.appendChild(card);
            });

            for (let i = 1; i <= totalPages; i++) {
              const btn = document.createElement('button');
              btn.textContent = i;
              btn.className = 'pagination-button';
              if (i === currentPage) btn.classList.add('active');
              btn.addEventListener('click', () => renderPage(i));
              pagination.appendChild(btn);
            }
          }

          renderPage(currentPage);

          // Mostrar formulário e esconder lista ao clicar em Novo
          const btnNovo = document.getElementById('btnNovoProduto');
          const btnCancelar = document.querySelector('.btn-cancel');
          const form = document.getElementById('formNovoProduto');

          if (btnNovo && btnCancelar && lista && pagination && form) {
            btnNovo.addEventListener('click', () => {
              lista.style.display = 'none';
              pagination.style.display = 'none';
              form.style.display = 'block';
            });

            btnCancelar.addEventListener('click', () => {
              form.style.display = 'none';
              lista.style.display = 'grid';
              pagination.style.display = 'flex';
            });
          }

          if (btnCadastrar && form) {
          btnCadastrar.addEventListener('click', (e) => {
            e.preventDefault(); // evita recarregar a página

            // Oculta o formulário e exibe a lista novamente
            form.style.display = 'none';
            lista.style.display = 'grid';
            pagination.style.display = 'flex';

            // Opcional: limpar o formulário
            form.querySelector('form').reset();

            // Opcional: adicionar item mock na lista
            // const novoProduto = {
            //   image: 'img/novo-produto.jpg',
            //   title: 'Novo Kit Festa',
            //   category: 'Exemplo',
            //   price: 'R$ 100,00',
            //   description: 'Descrição do novo item',
            //   sales: '0',
            //   stock: '1'
            // };
            // produtos.unshift(novoProduto);
            // renderPage(1);
          });
        }
        });
    }

    initAddProduct();

  } catch (error) {
    content.innerHTML = `<p>Erro ao carregar a página: ${error.message}</p>`;
  }
}

// Inicializa a página com a seção padrão
loadContent('dashboard');

// Configura os botões da sidebar
document.querySelectorAll('.sidebar button').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.textContent.trim().toLowerCase().replace(' ', '-');
    loadContent(section);
  });
});

// Configura o botão "Novo" na página de produtos
function setupNovoProduto() {
  const btnNovoProduto = document.getElementById('btnNovoProduto');
  const formNovoProduto = document.getElementById('formNovoProduto');
  const btnCancelar = document.querySelector('.btn-cancel');
  
  if (btnNovoProduto && formNovoProduto && btnCancelar) {
    // Configura o botão Novo
    btnNovoProduto.addEventListener('click', toggleForm);

    // Configura o botão Cancelar
    btnCancelar.addEventListener('click', () => {
      formNovoProduto.style.display = 'none';
    });
  }
}