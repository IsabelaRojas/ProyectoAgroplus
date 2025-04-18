import { renderModalConfirmarEliminación } from "../../components/modal/confirmar-eliminacion.modal.js";
import { renderModalExito } from "../../components/modal/mensaje-exito.modal.js";


export function renderDewormingRegistrationForm() {
    return `
 <div id="modal-formulario" class="modal">
        <div class="modal-contenido">
            <span class="cerrar-modal" id="cerrar-formulario">&times;</span>
            
            <section class="container-form">
                <div class="text-form-animal">
                    <h2>Formulario Animal</h2>
                </div>
                <div class="div-form-vacunacion">
                    <form id="form-desparasitacion">
                        <select class="controls" id="tipo-ganado" name="ganado" required>
                            <option value="" disabled selected>Seleccione un tipo de ganado</option>
                            <option value="vacuno">Vacuno</option>
                            <option value="Ovino">Ovino</option>
                            <option value="Porcino">Porcino</option>
                            <option value="Caprino">Caprino</option>
                            <option value="Equino">Equino</option> 
                            <option value="gallina">Gallo / Gallina</option>
                        </select>
                        <input class="controls" type="text" id="codigo-animal" name="codigo-animal" placeholder="Ingrese el codigo del animal" required>
                        <input class="controls" type="text" id="dosis" name="dosis" placeholder="Ingrese la dosis consumida" required>
                        <input class="controls" type="text" id="tipo-desparasitante" name="tipo-desparasitante" placeholder="Ingrese el tipo de desparasitante" required>
  
                        <label class="control-radio" for="fecha-desparasitacion">Fecha de desparasitación:</label>
                        <input class="controls" type="date" id="fecha-desparacitacion" name="fecha-desparacitacion">

                        <input class="controls" type="text" id="id_laboratorio" name="id_laboratorio" placeholder="Ingrese el laboratorio del desparasitante" required>

                        <input class="controls" type="submit">

                    </form>
                </div>
            </section>
        </div>
    </div>

    
    <!-- Modal de mensaje de éxito -->
    ${renderModalExito()}
    <!-- Modal confirmación de eliminación -->
    ${renderModalConfirmarEliminación()}
    `;
}