import { renderPagingRecordTable } from '../../components/layout/paging-record-table.component.js'
import { renderRecordsTable } from '../../components/layout/records-table.component.js'

export const columns = ['Tipo de ganado', 'Tipo de Animal', 'Raza', 'Codigo animal', 'Sexo', 'Madre', 'Padre', 'Fecha de nacimiento', 'Fecha de regsitro', 'Opciones'];

export function renderAnimalHistory(animalData) {
    return `
    <main id="main-animal-history" class="background-history-dashboard">

        <div class="bloq-registrer" id="btn-registrar-animales">
            <a >
                <i class="fa-solid fa-plus"></i> Registrar Nuevo Ganado
            </a>
        </div>

        <select class="select-filter"> 
            <option class="filter"> Filtrar por</option>
            <option class="" value="animales">animales</option>
            <option class="" value="crias">crias</option>
        </select> 

        <div class="bloq-privado">
            <h1>Historial Animales</h1>
        </div>

        <div class="bloques-proyecto">
        ${renderRecordsTable(columns, animalData)}
        ${renderPagingRecordTable()}
           
        </div>
    </main>
    `;
}