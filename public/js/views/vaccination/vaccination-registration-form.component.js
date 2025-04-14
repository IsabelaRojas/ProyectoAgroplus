export function renderVaccinationRegistrationForm() {
    return `
<div id="modal-formulario" class="modal">
        <div class="modal-contenido">
            <span class="cerrar-modal" id="cerrar-formulario">&times;</span>
            
            <section class="container-form">
                <div class="text-form-animal">
                    <h2>Formulario Animal</h2>
                </div>
                <div class="div-form-vacunacion">
                    <form id="form-vacunacion">
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
                        <input class="controls" type="text" id="dosis" name="dosis" placeholder="Ingrese la dosis aplicada" required>
                        <input class="controls" type="text" id="tipo-vacunacion" name="tipo-vacunacion" placeholder="Ingrese el tipo de vacunacion" required>
  
                        <label class="control-radio" for="fecha_vacunacion">Fecha de vacunación:</label>
                        <input class="controls" type="date" id="fecha_vacunacion" name="fecha_vacunacion">

                        <input class="controls" type="text" id="id_laboratorio" name="id_laboratorio" placeholder="Ingrese el laboratorio de la vacuna" required>

                        <input class="controls" type="submit">

                    </form>
                </div>
            </section>
        </div>
    </div>

    <!-- Modal de mensaje de éxito -->
    <div id="mensaje-exito" class="modal">
        <div class="modal-contenido">
            <span class="cerrar-modal" id="cerrar-exito">&times;</span>
            <p>✅ Registro exitoso</p>
            <button id="cerrar-modal-exito">Cerrar</button>
        </div>
    </div>
    `;
}