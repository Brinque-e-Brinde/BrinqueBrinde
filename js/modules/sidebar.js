
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

