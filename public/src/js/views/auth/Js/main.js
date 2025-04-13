import { renderSignUp } from './signup.js';

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtén el elemento donde quieres renderizar el formulario
    const appRoot = document.getElementById('app'); // Asegúrate de tener un elemento con id="app"
    
    // Llama a la función renderSignUp
    renderSignUp(appRoot);
    
    // Opcionalmente, agrega un event listener para el formulario
    document.getElementById('sign-up-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Aquí puedes agregar la lógica para procesar el formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('number').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Aquí iría el código para enviar los datos al servidor
        console.log('Formulario enviado', { name, email, phone });
    });
    
    // Event listener para el enlace "¿Ya tengo cuenta?"
    document.getElementById('go-to-login').addEventListener('click', (event) => {
        event.preventDefault();
        // Aquí el código para navegar a la página de login
        // Por ejemplo: renderLogin(appRoot);
    });
});
