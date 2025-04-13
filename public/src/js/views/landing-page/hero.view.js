export function renderHero() {
    return `
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Administra tu ganadería con inteligencia y eficiencia</h1>
            <p class="hero-subtitle">AgroPlus te ofrece la plataforma más completa para gestionar y optimizar todos los aspectos de tu explotación ganadera, de forma simple e intuitiva.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" id="loginBtn">
                    <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
                </button>
                <button class="btn btn-secondary" id="registerBtn">
                    <i class="fas fa-user-plus"></i> Registrarme
                </button>
            </div>
        </div>
        <div class="scroll-down">
            <p>Descubre más</p>
        </div>
    </section>
    `;
}
