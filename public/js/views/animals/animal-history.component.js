import { renderPagingRecordTable } from '../../components/layout/paging-record-table.component.js'
import { renderRecordsTable } from '../../components/layout/records-table.component.js'

const columns = ['Tipo de ganado', 'Animal', 'Codigo animal', 'Sexo', 'Fecha de regsitro', 'Opciones'];

export function renderAnimalHistory() {
    return `
    <main class="background-history-dashboard">
        <!-- Bloque de registro -->
        <div class="bloq-registrer">
            <a href="./animales.html">
                <i class="fa-solid fa-plus"></i> Registrar Nuevo Ganado
            </a>
        </div>

        <!-- Título principal -->
        <div class="bloq-privado">
            <h1>Historial Animales</h1>
        </div>

        <!-- Bloques principales del proyecto -->
        <div class="bloques-proyecto">
        ${renderRecordsTable(columns)}
        ${renderPagingRecordTable()}
           
        </div>
    </main>
    `;
}