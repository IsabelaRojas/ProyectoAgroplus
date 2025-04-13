// Capturar elementos del hero
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const scrollDown = document.querySelector('.scroll-down');

  document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'log-in.html'; // cambia el nombre si tu archivo es diferente
  });

  document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'sign-up.html'; // cambia el nombre si tu archivo es diferente
  });

// Efecto de desplazamiento suave para el botón "Descubre más"
scrollDown.addEventListener('click', () => {
    // Obtener la siguiente sección después del hero
    const heroSection = document.querySelector('.hero');
    const nextSection = heroSection.nextElementSibling;
    
    if (nextSection) {
        // Desplazamiento suave a la siguiente sección
        nextSection.scrollIntoView({ 
            behavior: 'smooth'
        });
    }
});

// Animación de entrada para los elementos del hero
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    // Agregamos una pequeña animación de entrada con setTimeout
    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
        if (heroTitle) heroTitle.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
        if (heroSubtitle) heroSubtitle.style.transform = 'translateY(0)';
    }, 600);
    
    setTimeout(() => {
        if (heroButtons) heroButtons.style.opacity = '1';
        if (heroButtons) heroButtons.style.transform = 'translateY(0)';
    }, 900);
    
    // Animación pulsante para el botón de scroll
    setTimeout(() => {
        if (scrollDown) scrollDown.style.opacity = '1';
    }, 1200);
});

// Opcional: Detectar scroll para ocultar/mostrar el botón de "Descubre más"
window.addEventListener('scroll', () => {
    // Si el usuario ha desplazado más del 10% de la altura de la pantalla
    if (window.scrollY > window.innerHeight * 0.1) {
        scrollDown.style.opacity = '0';
    } else {
        scrollDown.style.opacity = '1';
    }
});
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


// Procesar formulario de login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login datos:', { email, password, rememberMe });
    
    // Simulación de login exitoso
    window.location.href = loginForm.getAttribute('action');
});

// Procesar formulario de registro
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validación básica (puedes hacerla más estricta si quieres)
    if (email === '' || password === '') {
      alert('Por favor completa todos los campos.');
      return;
    }
})


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

