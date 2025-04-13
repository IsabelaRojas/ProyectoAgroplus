document.addEventListener('DOMContentLoaded', function() {
    // Variables del modal
    const modal = document.getElementById('configModal');
    const openBtn = document.getElementById('openConfigModal');
    const closeBtn = document.getElementById('closeModal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Abrir modal
    openBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Cambiar entre pestañas
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            tabBtns.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Agregar clase active al botón actual
            this.classList.add('active');
            
            // Mostrar contenido de pestaña correspondiente
            const tabId = this.getAttribute('data-tab');
            
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });
            
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Cambiar tema
    themeOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remover clase active de todas las opciones
            themeOptions.forEach(function(opt) {
                opt.classList.remove('active');
            });
            
            // Agregar clase active a la opción seleccionada
            this.classList.add('active');
            
            // Aplicar tema
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
    
    // Función para aplicar tema
    function applyTheme(theme) {
        const header = document.querySelector('header');
        const modalContent = document.querySelector('.modal-content');
        const footer = document.querySelector('footer')
       
        const logoImage = document.querySelector('.logo-agroplus img[alt="Logo Agroplus"]');
        const textImage = document.querySelector('.logo-agroplus img[alt="Agroplus"]');

        const body = document.body;
        
        // Elementos del main que deben cambiar
        const bloquesTitulo = document.querySelectorAll('.bloq-privado h1');
        const enlacesBloques = document.querySelectorAll('.bloq');
        const iconWhatsapp = document.querySelector('.icon-whatsapp');
        const footerLink = document.querySelector('footer a');
        
        if (theme === 'dark') {
            // Aplicar estilos oscuros al header
            logoImage.src = "../assets/iconos/logo agroplus negro.png"; // Nombre del logo para tema oscuro
            textImage.src = "../assets/iconos/Agroplusnegro.png"; // 
            
            header.style.backgroundColor = '#212121';
            footer.style.backgroundColor = '#212121';
            modalContent.style.backgroundColor = '#333';
        
            
            
            // Cambiar estilos de los bloques y enlaces
            bloquesTitulo.forEach(function(titulo) {
                titulo.style.color = '#e0e0e0';
                titulo.style.textShadow = 
                    '-2px -2px 0 #121212, ' +
                    '2px -2px 0 #121212, ' + 
                    '-2px 2px 0 #121212, ' + 
                    '2px 2px 0 #121212';
            });
            
            // Cambiar el color de fondo de los enlaces de bloques
            enlacesBloques.forEach(function(enlace) {
                enlace.style.backgroundColor = '#333333b2';
                enlace.style.borderColor = '#555';
            });
            
            // Modificar el efecto hover de los bloques usando CSS personalizado
            let styleElement = document.getElementById('theme-styles');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'theme-styles';
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                .bloq:hover {
                    background-color: #444 !important;
                }
            `;
            
            // Si hay un botón de configuración, modificar su estilo
            const configBtn = document.querySelector('.config-btn');
            if (configBtn) {
                configBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }
            
            // Guardar preferencia en localStorage
            localStorage.setItem('theme', 'dark');
        } else {
            // Aplicar estilos verdes (por defecto)
            header.style.backgroundColor = '#265e28';
            footer.style.backgroundColor ='#265e28';
            modalContent.style.backgroundColor = '#265e28';

            // Volver a las imágenes originales para tema claro
            logoImage.src = "../assets/iconos/logo agroplus.png";
            textImage.src = "../assets/iconos/Agroplus.png";
            
            // Restaurar estilos originales para los títulos
            bloquesTitulo.forEach(function(titulo) {
                titulo.style.color = 'white';
                titulo.style.textShadow = 
                    '-2px -2px 0 rgb(1, 64, 6), ' +
                    '2px -2px 0 rgb(1, 64, 6), ' + 
                    '-2px 2px 0 rgb(1, 64, 6), ' + 
                    '2px 2px 0 rgb(1, 64, 6)';
            });
            
            // Restaurar el color de fondo de los enlaces de bloques
            enlacesBloques.forEach(function(enlace) {
                enlace.style.backgroundColor = '#265e28b2';
                enlace.style.borderColor = 'black';
            });
            
            // Restaurar el efecto hover original
            let styleElement = document.getElementById('theme-styles');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'theme-styles';
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                .bloq:hover {
                    background-color: #1e4a21 !important;
                }
            `;
            
            // Restaurar estilo de botón de configuración
            const configBtn = document.querySelector('.config-btn');
            if (configBtn) {
                configBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }
            
            // Guardar preferencia en localStorage
            localStorage.setItem('theme', 'green');
        }
        
        // Evento personalizado para notificar a otros componentes del cambio de tema
        const themeEvent = new CustomEvent('themeChanged', {
            detail: { theme: theme }
        });
        document.dispatchEvent(themeEvent);
    }
    
    // Cargar tema guardado al iniciar
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            // Marcar la opción correspondiente como activa
            themeOptions.forEach(function(option) {
                if (option.getAttribute('data-theme') === savedTheme) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            // Aplicar el tema
            applyTheme(savedTheme);
        }
    }
    
    // Cargar tema al iniciar
    loadSavedTheme();
});
