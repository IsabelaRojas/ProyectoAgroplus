export function renderanimalForm(root) {
    root.innerHTML = `
      <div class="div-form-animal">
                <form>
                    <select class="controls" id="ganado" name="ganado">
                        <option value="" disabled selected>Seleccione un tipo de ganado</option>
                        <option value="vacuno">Vacuno</option>
                        <option value="Ovino">Ovino</option>
                        <option value="Porcino">Porcino</option>
                        <option value="Caprino">Caprino</option>
                        <option value="Equino">Equino</option>
                        <option value="gallina">Gallo / Gallina</option>
                    </select>
         
                    <div id="opciones-animales" style="display: none;">
                        <label for="animales">Seleccione un animal:</label>
                        <select class="controls" id="animales" name="animales">
                           
                        </select>
                    </div>
                        <input class="controls" type="text" id="id_animal" name="id_animal" placeholder="Ingrese el ID del animal">
                        <select class="controls" id="sexo" name="sexo">
                            <option value="" disabled selected>Seleccione el sexo del animal</option>
                            <option value="vacuno">Hembra</option>
                            <option value="Ovino">Macho</option>
                        </select>
  
                        <label class="control-radio" for="fecha_compra">Fecha de compra:</label>
                        <input class="controls" type="date" id="fecha_compra" name="fecha_compra">

                        <input class="controls" type="submit">
                </form>
            </div>
            <section id="historial-animales"></section>

             <!-- Modal oculto por defecto -->
             <div id="mensaje-exito" class="modal">
                 <div class="modal-contenido">
                    <p>✅ Registro exitoso</p>
                    <button id="cerrar-modal">Cerrar</button>
                </div>
             </div>
  
        </section>`
    } 