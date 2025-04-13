export function renderHeader() {
    return `
    <header class="header-container">
        <div class="header-image">
            <div class="logo-agroplus">
                <img src="../../assets/iconos/logo agroplus.png" alt="Logo Agroplus">
            </div>
            <div class="logo-agroplus">
                <img src="../../assets/iconos/Agroplus.png" alt="Agroplus">
            </div>
        </div>
        <div class="nav-links">
            <a href="#features" class="nav-link">Funcionalidades</a>
            <a href="#benefits" class="nav-link">Beneficios</a>
            <a href="#testimonials" class="nav-link">Testimonios</a>
            <a href="#contact" class="nav-link">Contacto</a>
        </div>
        <button class="mobile-menu-btn">
            <i class="fas fa-bars"></i>
        </button>
    </header>`;
}