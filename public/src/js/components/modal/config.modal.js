import { renderProfileSettings } from './profileSettings.modal.js'

export function renderConfigModal() {
    return `
     <div class="modal" id="configModal">
        <div class="modal-content">
            <span class="close-modal" id="closeModal">&times;</span>
            <h2 class="modal-title">Configuración</h2>
            
            <!-- Pestañas del modal -->
            <div class="modal-tabs">
                <button class="tab-btn active" data-tab="themeTab">Tema</button>
                <button class="tab-btn" data-tab="userTab">Perfil de Usuario</button>
            </div>
            
            <!-- Contenido de la pestaña Tema -->
            <div class="tab-content active" id="themeTab">
                <h3>Seleccione un tema:</h3>
                <div class="theme-options">
                    <div class="theme-option green active" data-theme="green">
                        <div class="theme-color green-color"></div>
                        <span class="theme-name">Verde</span>
                    </div>
                    <div class="theme-option dark" data-theme="dark">
                        <div class="theme-color dark-color"></div>
                        <span class="theme-name">Oscuro</span>
                    </div>
                </div>
            </div>
            <!-- Contenido de la pestaña Usuario -->
            ${renderProfileSettings()} 
        </div>
    </div>
    `;
}
