export function renderAnimalsRegistrationForm() {
    return `
 <div id="modal-formulario" class="modal">
        <div class="modal-contenido">
            <span class="cerrar-modal" id="cerrar-formulario">&times;</span>
            
            <section class="container-form">
                <div class="text-form-animal">
                    <h2>Formulario Animal</h2>
                </div>
                <div class="div-form-animal">
                    <form id="form-animal">
                        <select class="controls" id="tipo-ganado" name="ganado" required>
                            <option value="" disabled selected>Seleccione un tipo de ganado</option>
                            <option value="vacuno">Vacuno</option>
                            <option value="Ovino">Ovino</option>
                            <option value="Porcino">Porcino</option>
                            <option value="Caprino">Caprino</option>
                            <option value="Equino">Equino</option>
                            <option value="gallina">Gallo / Gallina</option>
                        </select>
                        
                        <input type="text" class="controls" id="tipo-animal" name="tipo-animal" placeholder="Ingrese el tipo de animal" required>
                        <input type="text" class="controls" id="codigo-animal" name="codigo-animal" placeholder="Ingrese el codigo del animal" required>
                        <input type="text" class="controls" id="raza-animal" name="raza-animal" placeholder="Ingrese la raza">
                        
                        <select class="controls" id="sexo" name="sexo">
                            <option value="" disabled selected>Elige el sexo del animal</option>
                            <option value="hembra">Hembra</option>
                            <option value="macho">Macho</option>
                        </select>
                        
                        <label class="control-radio" for="fecha-nacimiento-cria">Fecha de nacimiento:</label>
                        <input class="controls" type="date" id="fecha-nacimiento-cria" name="fecha-nacimiento-cria">

                        <select class="controls" id="id-padre" name="id-padre">
                            <option value="" disabled selected>Seleccione el padre (si aplica)</option>
                        </select>

                        <select class="controls" id="id-madre" name="id-madre">
                            <option value="" disabled selected>Seleccione la madre (si aplica)</option>
                        </select>

                        <input class="controls" type="submit" value="Registrar Animal">
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