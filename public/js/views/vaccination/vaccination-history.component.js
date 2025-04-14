import { renderPagingRecordTable } from '../../components/layout/paging-record-table.component.js'
import { renderRecordsTable } from '../../components/layout/records-table.component.js'

const columns = ['Tipo de ganado', 'Codio animal', 'Dosis aplicada', 'Tipo de vacuna', 'Fecha de vacunación', 'laboratorio', 'Opciones'];

export function renderVaccinationHistory() {
    return `
<main class="background-history-dashboard">
    <!-- Bloque de registro -->
    <div class="bloq-registrer" id="btn-registrar-vacuna">
        <a >
            <i class="fa-solid fa-plus"></i> Registrar Nueva vacuna
        </a>
    </div>

    <!-- Título principal -->
    <div class="bloq-privado">
        <h1>Historial Vacunación</h1>
    </div>

    <!-- Bloques principales del proyecto -->
    <div class="bloques-proyecto">
    ${renderRecordsTable(columns)}
    ${renderPagingRecordTable()}
        
    </div>
</main>
    `;
}