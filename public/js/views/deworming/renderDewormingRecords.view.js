import {renderDewormingHistory} from '../deworming/deworming-history.component.js'
import {renderDewormingRegistrationForm} from '../deworming/deworming-registration-form.component.js'
import { renderNavbar } from '../../components/layout/navbar.component.js'
import { renderFooter } from '../../components/layout/footer.component.js'
import { renderConfigModal } from '../../components/modal/config.modal.js'

export function renderDewormingRecords(app){
    app.innerHTML= `
    <div class="layout">
        ${renderDewormingRegistrationForm()}
        ${renderDewormingHistory()}
        ${renderNavbar()}
        ${renderConfigModal()}
        ${renderFooter()}
    </div>
    `;
    const btnAbrirModal = document.getElementById('btn-registrar-desparasitacion');
    const modalFormulario = document.getElementById('modal-formulario');
    const cerrarFormulario = document.getElementById('cerrar-formulario');
    const formulario = document.getElementById('form-desparasitacion');
    const modalExito = document.getElementById('mensaje-exito');
    const cerrarExito = document.getElementById('cerrar-exito');
    const btnCerrarExito = document.getElementById('cerrar-modal-exito');

    // Abrir el modal del formulario
    btnAbrirModal.addEventListener('click', (e) => {
        // e.stopPropagation();  // Detener la propagación del evento
        modalFormulario.style.display = 'block';
    });

    // Cerrar el modal del formulario
    cerrarFormulario.addEventListener('click', () => {
        modalFormulario.style.display = 'none';
    });

    // Cerrar al hacer clic fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === modalFormulario) {
            modalFormulario.style.display = 'none';
        }
        if (e.target === modalExito) {
            modalExito.style.display = 'none';
        }
    });
    
    // Evitar que los clics dentro del modal se propaguen al window
    document.querySelectorAll('.modal-contenido').forEach(modal => {
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Enviar formulario y mostrar modal de éxito
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para procesar los datos del formulario
        
        // Cerrar el modal del formulario
        modalFormulario.style.display = 'none';
        
        // Mostrar el modal de éxito
        modalExito.style.display = 'block';
    });

    // Cerrar modal de éxito
    cerrarExito.addEventListener('click', () => {
        modalExito.style.display = 'none';
    });

    btnCerrarExito.addEventListener('click', () => {
        modalExito.style.display = 'none';
    });
}