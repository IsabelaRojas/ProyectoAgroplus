export function renderAnimalsRegistrationForm() {
    return `
    <main>
        <section class="container-form">
            <div class="text-form-animal">
                <h2>Formulario Animal</h2>
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
                    
                    <input type="text" class="controls" id="nombre_animal" name="nombre_animal" placeholder="Ingrese el tipo de animal">
                    <input type="text" class="controls" id="nombre_animal" name="nombre_animal" placeholder="Ingrese el codigo del animal">
                    <select class="controls" id="sexo" name="sexo">
                        <option value="" disabled selected>Elige el sexo del animal</option>
                        <option value="vacuno">Hembra</option>
                        <option value="Ovino">Macho</option>
                    </select>
  
                    <label class="control-radio" for="fecha_compra">F</label>
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
  
        </section>
    </main>
    `;
}