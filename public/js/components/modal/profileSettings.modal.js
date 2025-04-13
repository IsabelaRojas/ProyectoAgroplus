export function renderProfileSettings() {
    return `
      
   <div class="tab-content" id="userTab">
        <div class="user-info">
            <h3>Información Personal</h3>
            <div class="user-field">
                <span class="field-label">Nombre:</span>
                <span class="field-value">Juan Sebastian</span>
            </div>
            <div class="user-field">
                <span class="field-label">Email:</span>
                <span class="field-value">juan.perez@agroplus.com</span>
            </div>
            <div class="user-field">
                <span class="field-label">Telefono:</span>
                <span class="field-value">3133001189</span>
            </div>
            <div class="user-field">
                <span class="field-label">Última conexión:</span>
                <span class="field-value">Hoy, 10:45 AM</span>
            </div>
        </div>
        <button class="edit-profile-btn">Editar perfil</button>
    </div>
    `;
}