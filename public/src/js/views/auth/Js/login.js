const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Función para abrir el modal de autenticación
function openAuthModal() {
    authModal.style.display = 'block';
}

// Función para cerrar el modal
function closeAuthModal() {
    authModal.style.display = 'none';
}

// Cerrar modal al hacer clic en la X
closeModal.addEventListener('click', closeAuthModal);

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === authModal) {
        closeAuthModal();
    }
});

// Cambio de pestañas (Login/Register)
tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover clase active de todas las pestañas
        tabItems.forEach(item => item.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Agregar clase active a la pestaña seleccionada
        tab.classList.add('active');
        
        // Mostrar el contenido correspondiente
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`${tabName}Tab`).classList.add('active');
        
        // Actualizar título del modal
        if (tabName === 'login') {
            modalTitle.textContent = 'Iniciar Sesión';
        } else {
            modalTitle.textContent = 'Registrarme';
        }
    });
});

// Procesar formulario de login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login datos:', { email, password, rememberMe });
    
    // Simulación de login exitoso
    window.location.href = loginForm.getAttribute('action');
});

// Procesar formulario de registro
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Validación básica de contraseñas
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }
    
    // Aquí puedes agregar la lógica de registro
    console.log('Registro datos:', { name, email, password });
    
    // Simulación de registro exitoso
    window.location.href = registerForm.getAttribute('action');
});

// Función para mostrar el modal desde cualquier parte del código
function showLoginModal() {
    openAuthModal();
    // Asegurarse de que la pestaña de login esté activa
    tabItems[0].click();
}

function showRegisterModal() {
    openAuthModal();
    // Activar la pestaña de registro
    tabItems[1].click();
}

// Exportar funciones para usarlas en otros archivos si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showLoginModal,
        showRegisterModal,
        closeAuthModal
    };
}