document.addEventListener("DOMContentLoaded", function () {
    const btnNovo = document.getElementById("btnNovoProduto");
    const formNovoProduto = document.getElementById("formNovoProduto");
    const btnCancelar = document.querySelector(".btn-cancel");
    const tagsContainer = document.getElementById('tags-container');
    const tagsInput = document.getElementById('tags-input');
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const imagePreview = document.getElementById('imagePreview');
    const uploadedImages = document.getElementById('uploadedImages');


    //Abrir form
    if (btnNovo && formNovoProduto) {
      btnNovo.addEventListener("click", function () {
        formNovoProduto.style.display = "block";
        btnNovo.style.display = "none";
      });
    }
  
    //Fechar form
    if (btnCancelar) {
      btnCancelar.addEventListener("click", function () {
        formNovoProduto.style.display = "none";
        btnNovo.style.display = "inline-block";
      });
    }

    // Função para criar uma nova tag
    function createTag(text) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
          ${text}
          <span class="remove-tag">&times;</span>
        `;
        
        // Adiciona evento para remover a tag
        tag.querySelector('.remove-tag').addEventListener('click', () => {
          tag.remove();
        });
        
        return tag;
      }
    
      // Função para adicionar tag
      function addTag(text) {
        if (!text.trim()) return;
        
        const tag = createTag(text);
        tagsContainer.appendChild(tag);
      }
    
      // Evento para adicionar tags ao pressionar espaço
      tagsInput.addEventListener('keydown', function(e) {
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          const text = this.value.trim();
          
          if (text) {
            addTag(text);
            this.value = '';
          }
        }
        
        // Backspace remove a última tag se o input estiver vazio
        if (e.key === 'Backspace' && this.value === '') {
          const tags = tagsContainer.querySelectorAll('.tag');
          if (tags.length > 0) {
            tags[tags.length - 1].remove();
          }
        }
      });
    
      // Opcional: Adicionar tags ao perder o foco (blur)
      tagsInput.addEventListener('blur', function() {
        if (this.value.trim()) {
          addTag(this.value.trim());
          this.value = '';
        }
      });

    // Arrastar e soltar
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

    // Enviar arquivo
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
        handleFiles(e.target.files);
        }
    });

  // fluxo dos arquivos
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match('image.*')) {
        const reader = new FileReader();

        reader.onload = (function(file) {
          return function(e) {
            // pre visualização
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.innerHTML = `
              <span class="file-name">${file.name}</span>
              <div class="file-actions">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-times-circle remove-btn" title="Remover"></i>
              </div>
            `;

            // Remover
            thumbnail.querySelector('.remove-btn').addEventListener('click', () => {
              thumbnail.remove();
            });

            uploadedImages.appendChild(thumbnail);

            // Mostrar a imagem
            if (i === 0) {
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
  });
  