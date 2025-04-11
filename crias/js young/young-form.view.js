export function renderYoungForm(root) {
    root.innerHTML = `
     <section class="container-form">
            <div class="text-form-animal">
                <h2>Formulario Crias</h2>
            </div>
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

                        <label class="control-radio" for="sexo_crias">Sexo de las crias:</label>
                        <input class="controls" type="text" id="sexo" name="sexo" placeholder="Cantidad de hembras">
                        <input class="controls" type="text" id="sexo" name="sexo" placeholder="Cantidad de machos">

                        <input class="controls" type="text" id="id_cria" name="id_cria" placeholder="Ingrese el ID de la cria">
                      
  
                        <label class="control-radio" for="fecha_nacimiento">Fecha de nacimiento:</label>
                        <input class="controls" type="date" id="fecha_nacimiento" name="fecha_nacimiento">

                        <input class="controls" type="text" id="id_animal" name="id_animal" placeholder="Ingrese el ID de la madre">
                        <input class="controls" type="text" id="id_animal" name="id_animal" placeholder="Ingrese el ID del padre">

                        <input class="controls" type="submit">
                </form>
            </div>
        </section>
   `} 