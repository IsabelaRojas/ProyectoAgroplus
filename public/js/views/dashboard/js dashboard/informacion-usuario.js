document.addEventListener('DOMContentLoaded', function() {
    // [Todo el código existente se mantiene]
    
    // Funcionalidad para editar perfil
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    if (editProfileBtn) {
        let isEditing = false;
        
        editProfileBtn.addEventListener('click', function() {
            const userFields = document.querySelectorAll('.user-field');
            
            if (!isEditing) {
                // Cambiar a modo edición
                userFields.forEach(function(field) {
                    const label = field.querySelector('.field-label').textContent;
                    const value = field.querySelector('.field-value').textContent;
                    
                    // No hacemos editable el campo de "Última conexión"
                    if (label.includes("Última conexión")) {
                        return;
                    }
                    
                    // Crear input para editar
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = value;
                    input.className = 'edit-input';
                    
                    // Estilo para los inputs
                    input.style.width = '100%';
                    input.style.padding = '5px';
                    input.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    input.style.border = 'none';
                    input.style.borderRadius = '4px';
                    input.style.color = '#333';
                    
                    // Reemplazar el valor por el input
                    const valueSpan = field.querySelector('.field-value');
                    valueSpan.innerHTML = '';
                    valueSpan.appendChild(input);
                });
                
                // Cambiar el texto del botón
                this.textContent = 'Actualizar perfil';
                
                // Agregar botón para cancelar
                const cancelButton = document.createElement('button');
                cancelButton.textContent = 'Cancelar';
                cancelButton.className = 'cancel-edit-btn';
                cancelButton.style.width = '100%';
                cancelButton.style.padding = '10px';
                cancelButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                cancelButton.style.border = 'none';
                cancelButton.style.color = 'white';
                cancelButton.style.borderRadius = '5px';
                cancelButton.style.cursor = 'pointer';
                cancelButton.style.marginTop = '10px';
                
                // Agregar evento para cancelar
                cancelButton.addEventListener('click', function() {
                    // Restaurar el perfil original
                    restoreProfile();
                    // Remover el botón de cancelar
                    this.remove();
                });
                
                // Insertar el botón de cancelar después del botón de editar
                this.parentNode.insertBefore(cancelButton, this.nextSibling);
                
                isEditing = true;
            } else {
                // Guardar los cambios
                const updatedValues = {};
                const inputs = document.querySelectorAll('.edit-input');
                
                inputs.forEach(function(input) {
                    // Obtener el campo y su valor
                    const fieldContainer = input.closest('.user-field');
                    const fieldLabel = fieldContainer.querySelector('.field-label').textContent.replace(':', '');
                    updatedValues[fieldLabel] = input.value;
                });
                
                // Actualizar los valores en el DOM
                userFields.forEach(function(field) {
                    const label = field.querySelector('.field-label').textContent.replace(':', '');
                    const valueSpan = field.querySelector('.field-value');
                    
                    // No actualizamos "Última conexión"
                    if (label.includes("Última conexión")) {
                        return;
                    }
                    
                    // Restaurar el span con el nuevo valor
                    if (updatedValues[label]) {
                        valueSpan.textContent = updatedValues[label];
                    }
                });
                
                // Guardar en localStorage
                localStorage.setItem('userProfile', JSON.stringify(updatedValues));
                
                // Mostrar notificación de éxito
                showNotification('Perfil actualizado con éxito', 'success');
                
                // Cambiar el botón de vuelta a "Editar perfil"
                this.textContent = 'Editar perfil';
                
                // Eliminar el botón de cancelar si existe
                const cancelButton = document.querySelector('.cancel-edit-btn');
                if (cancelButton) {
                    cancelButton.remove();
                }
                
                isEditing = false;
            }
        });
        
        // Función para restaurar el perfil a los valores actuales
        function restoreProfile() {
            const userFields = document.querySelectorAll('.user-field');
            const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || {
                "Nombre": "Juan Pérez",
                "Email": "juan.perez@agroplus.com",
                "Rol": "Administrador"
            };
            
            userFields.forEach(function(field) {
                const label = field.querySelector('.field-label').textContent.replace(':', '');
                const valueSpan = field.querySelector('.field-value');
                
                // No restauramos "Última conexión"
                if (label.includes("Última conexión")) {
                    return;
                }
                
                // Restaurar el valor del perfil
                if (savedProfile[label]) {
                    valueSpan.textContent = savedProfile[label];
                }
            });
            
            // Restaurar el botón
            const editBtn = document.querySelector('.edit-profile-btn');
            if (editBtn) {
                editBtn.textContent = 'Editar perfil';
            }
            
            isEditing = false;
        }
        
        // Función para mostrar notificaciones
        function showNotification(message, type) {
            // Crear elemento de notificación
            const notification = document.createElement('div');
            notification.className = 'notification ' + type;
            notification.textContent = message;
            
            // Estilos para la notificación
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.padding = '15px 20px';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '2000';
            notification.style.maxWidth = '300px';
            notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            notification.style.animation = 'fadeInOut 4s forwards';
            
            // Definir color según el tipo
            if (type === 'success') {
                notification.style.backgroundColor = '#4CAF50';
                notification.style.color = 'white';
            } else if (type === 'error') {
                notification.style.backgroundColor = '#F44336';
                notification.style.color = 'white';
            }
            
            // Agregar animación al documento si no existe
            if (!document.getElementById('notification-animations')) {
                const styleSheet = document.createElement('style');
                styleSheet.id = 'notification-animations';
                styleSheet.textContent = `
                    @keyframes fadeInOut {
                        0% { opacity: 0; transform: translateY(-20px); }
                        10% { opacity: 1; transform: translateY(0); }
                        90% { opacity: 1; transform: translateY(0); }
                        100% { opacity: 0; transform: translateY(-20px); }
                    }
                `;
                document.head.appendChild(styleSheet);
            }
            
            // Agregar la notificación al DOM
            document.body.appendChild(notification);
            
            // Eliminar después de la animación
            setTimeout(function() {
                notification.remove();
            }, 4000);
        }
        
        // Cargar datos de perfil guardados al iniciar
        function loadSavedProfile() {
            const savedProfile = localStorage.getItem('userProfile');
            if (savedProfile) {
                const profileData = JSON.parse(savedProfile);
                const userFields = document.querySelectorAll('.user-field');
                
                userFields.forEach(function(field) {
                    const label = field.querySelector('.field-label').textContent.replace(':', '');
                    const valueSpan = field.querySelector('.field-value');
                    
                    // No actualizamos "Última conexión"
                    if (label.includes("Última conexión")) {
                        return;
                    }
                    
                    // Actualizar los valores con los guardados
                    if (profileData[label]) {
                        valueSpan.textContent = profileData[label];
                    }
                });
            }
        }
        
        // Cargar perfil guardado al iniciar
        loadSavedProfile();
    }
});