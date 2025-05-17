function initAddProduct() {
  const btnNovo = document.getElementById("btnNovoProduto");
  const formNovoProduto = document.getElementById("formNovoProduto");
  const btnCancelar = document.querySelector(".btn-cancel");
  const tagsContainer = document.getElementById('tags-container');
  const tagsInput = document.getElementById('tags-input');
  const fileInput = document.getElementById('fileInput');
  const uploadArea = document.getElementById('uploadArea');
  const imagePreview = document.getElementById('imagePreview');
  const uploadedImages = document.getElementById('uploadedImages');

  if (!btnNovo || !formNovoProduto) return; // Se não tiver os elementos, sai

  // Abrir form
  btnNovo.addEventListener("click", () => {
    formNovoProduto.style.display = "block";
    btnNovo.style.display = "none";
  });

  // Fechar form
  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      formNovoProduto.style.display = "none";
      btnNovo.style.display = "inline-block";
    });
  }

  // Funções de tag
  function createTag(text) {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.innerHTML = `${text} <span class="remove-tag">&times;</span>`;
    tag.querySelector('.remove-tag').addEventListener('click', () => tag.remove());
    return tag;
  }

  function addTag(text) {
    if (!text.trim()) return;
    const tag = createTag(text);
    tagsContainer.appendChild(tag);
  }

  tagsInput.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      const text = tagsInput.value.trim();
      if (text) {
        addTag(text);
        tagsInput.value = '';
      }
    }
    if (e.key === 'Backspace' && tagsInput.value === '') {
      const tags = tagsContainer.querySelectorAll('.tag');
      if (tags.length) tags[tags.length - 1].remove();
    }
  });

  tagsInput.addEventListener('blur', () => {
    if (tagsInput.value.trim()) {
      addTag(tagsInput.value.trim());
      tagsInput.value = '';
    }
  });

  // Upload de imagem
  if (uploadArea && fileInput) {
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.closest('.image-upload-box').classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.closest('.image-upload-box').classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.closest('.image-upload-box').classList.remove('drag-over');
      if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        handleFiles(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length) {
        handleFiles(e.target.files);
      }
    });
  }

  // Handle arquivos
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (function(file) {
          return function(e) {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.innerHTML = `
              <span class="file-name">${file.name}</span>
              <div class="file-actions">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-times-circle remove-btn" title="Remover"></i>
              </div>
            `;
            thumbnail.querySelector('.remove-btn').addEventListener('click', () => thumbnail.remove());
            uploadedImages.appendChild(thumbnail);
            if (i === 0 && imagePreview) {
              imagePreview.style.display = 'block';
              imagePreview.style.backgroundImage = `url(${e.target.result})`;
              imagePreview.style.backgroundSize = 'contain';
              imagePreview.style.backgroundRepeat = 'no-repeat';
              imagePreview.style.backgroundPosition = 'center';
            }
          };
        })(file);
        reader.readAsDataURL(file);
      }
    }
  }
}
