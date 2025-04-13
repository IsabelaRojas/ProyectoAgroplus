export function renderNavbar() {
    return `
    <header>
        <section class="header-container">
            <div class="header-image">
                <div class="logo-agroplus">
                    <img src="../../assets/iconos/logo agroplus.png" alt="Logo Agroplus">
                </div>
                <div class="logo-agroplus">
                    <img src="../../assets/iconos/Agroplus.png" alt="Agroplus">
                </div>
            </div>
            <div class="menu-simple">
                <button class="config-btn" id="openConfigModal">
                    <i class="fa-solid fa-gear"></i> Configuración
                </button>
            </div>
        </section>
    </header>
    `;
}