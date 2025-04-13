export function renderRecordsTable(columns) {
    return `
    <!-- Tabla de historial -->
    <div class="tabla-historial">
        <div class="tabla-responiva">
            <table>
                <thead>
                    <tr>
                        // <th>Tipo de ganado</th>
                        // <th>Animal</th>
                        // <th>ID Animal</th>
                        // <th>Sexo del Animal</th>
                        // <th>Fecha de compra</th>
                        // <th>Estado</th>
                        ${createThElement(columns)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        // <td>Vacuno</td>
                        // <td>Vaca</td>
                        // <td>0258</td>
                        // <td>Hembra</td>
                        // <td>05/02/2023</td>
                        // <td class="acciones">
                        //     <a href="#"><i class="fa-solid fa-eye"></i></a>
                        //     <a href="#"><i class="fa-solid fa-pen-to-square"></i></a>
                        //     <a href="#"><i class="fa-solid fa-trash"></i></a>
                        // </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    `;
}

function createThElement(columns) {
    return columns.map(column => `<th>${column}</th>`).join('');
}

