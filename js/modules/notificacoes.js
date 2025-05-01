// Função para mostrar notificação
function showNotification(notificationId, duration = 3000, fieldName = null) {
    const notification = document.getElementById(notificationId);
    
    // Se for notificação de erro e tiver um campo específico
    if (notificationId === 'notificationError' && fieldName) {
        document.getElementById('errorField').textContent = fieldName;
    }
    
    // Mostrar notificação
    notification.classList.add('show');
    
    // Esconder após o tempo definido
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Funções para chamar em seu código
function notificarSucesso() {
    showNotification('notificationSuccess');
}

function notificarErro(campo) {
    showNotification('notificationError', 3000, campo);
}