export function renderVaccinationForm(root) {
    root.innerHTML = `
     <div class="div-form-animal">
                <input class="controls" type="text" id="id_vacuna" name="id_vacuna" placeholder="Ingrese el ID de la vacuna">
                <input class="controls" type="text" id="id_animal" name="id_animal" placeholder="Ingrese el ID del animal">
                <input class="controls" type="text" id="tipo_vacuna" name="tipo_vacuna" placeholder="Ingrese el tipo de vacuna">

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


                        <input class="controls" type="text" id="dosis" name="dosis" placeholder="Ingrese la dosis aplicada">
                      
  
                        <label class="control-radio" for="fecha_vacunacion">Fecha de vacunación:</label>
                        <input class="controls" type="date" id="fecha_vacunacion" name="fecha_vacunacion">

                        <input class="controls" type="text" id="id_laboratorio" name="id_laboratorio" placeholder="Ingrese el laboratorio de la vacuna">

                        <input class="controls" type="submit">
                </form>
            </div>
   `
    } 