// Função para abrir o modal
function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Fechar o modal quando clicar fora do conteúdo
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}