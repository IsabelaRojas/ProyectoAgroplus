import { renderPagingRecordTable } from '../../components/layout/paging-record-table.component.js'
import { renderRecordsTable } from '../../components/layout/records-table.component.js'

const columns = ['Tipo de ganado', 'Codigo animal', 'Dosis consumida', 'Desparasitante', 'laboratorio', 'Fecha de regsitro', 'Opciones'];

export function renderDewormingHistory() {
    return `
<main >
    <!-- Bloque de registro -->
    <div class="bloq-registrer" id="btn-registrar-desparasitacion">
        <a >
            <i class="fa-solid fa-plus"></i> Registrar Nueva Desparacitación
        </a>
    </div>

    <!-- Título principal -->
    <div class="bloq-privado">
        <h1>Historial desparasitación</h1>
    </div>

    <!-- Bloques principales del proyecto -->
    <div class="bloques-proyecto">
    ${renderRecordsTable(columns)}
    ${renderPagingRecordTable()}
        
    </div>
</main>
    `;
}