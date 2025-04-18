export function renderModalConfirmarEliminación(){
    return `
    <div id="confirmar-eliminacion" class="modal">
        <div class="modal-contenido">
            <p>¿Desea eliminar este registro?</p>
            <button id="btn-confirmar-eliminacion">Confirmar</button>
            <button id="btn-cancelar-eliminacion">Cancelar</button>
        </div>
    </div>
    `;
}