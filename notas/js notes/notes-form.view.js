export function renderFormNotes(root) {
    root.innerHTML = `
    <div class="div-form-animal">
                <form>
        
                        <input class="controls" type="text" id="id_nota" name="id_nota" placeholder="Numero de la nota">
                        <input class="controls" type="text" id="titulo_nota" name="titulo_nota" placeholder="Titulo de la nota">
                        <textarea id="nota" name="nota" rows="5" cols="50" placeholder="Escribe tu nota aquí..."></textarea>


                        <select class="controls" id="notas" name="notas">
                            <option value="" disabled selected>Asignar a</option>
                            <option value="animal">Animal</option>
                            <option value="crias">Crias</option>
                            <option value="vacunacion">Vacunacion</option>
                            <option value="desparasitacion">Desparasitación</option>
                        </select>

                        <input class="controls" type="submit">
                </form>
            </div>
   `} 