import { renderPagingRecordTable } from '../../components/layout/paging-record-table.component.js'
import { renderRecordsTable } from '../../components/layout/records-table.component.js'

const columns = ['Nombre de la nota', 'Descripción', 'Opciones'];

export function renderNotesHistory() {
    return `
    <main class="background-history-dashboard">
    <!-- Bloque de registro -->
    <div class="bloq-registrer" id="btn-registrar-notas">
        <a >
            <i class="fa-solid fa-plus"></i> Registrar Nueva vacuna
        </a>
    </div>

    <!-- Título principal -->
    <div class="bloq-privado">
        <h1>Historial Notas</h1>
    </div>

    <!-- Bloques principales del proyecto -->
    <div class="bloques-proyecto">
    ${renderRecordsTable(columns)}
    ${renderPagingRecordTable()}
        
    </div>
</main>
    `;
}