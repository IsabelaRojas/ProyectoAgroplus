export function renderNotesRegistrationForm() {
    return `
    <div id="modal-formulario" class="modal">
        <div class="modal-contenido">
            <span class="cerrar-modal" id="cerrar-formulario">&times;</span>
            
            <section class="container-form">
                <div class="text-form-notas">
                    <h2>Formulario Animal</h2>
                </div>
                <div class="div-form-vacunacion">
                    <form id="form-vacunacion">
                
                <input class="controls" type="text" id="titulo_nota" name="titulo_nota" placeholder="Titulo de la nota">
                <textarea id="nota" name="nota" rows="5" cols="50" placeholder="Escribe tu nota aquí..."></textarea>
                        

                        <input class="controls" type="submit">

                    </form>
                </div>
            </section>
        </div>
    </div>


    `;
}