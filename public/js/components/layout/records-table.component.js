export function renderRecordsTable(columns) {
    return `
    <!-- Tabla de historial -->
    <div class="tabla-historial">
        <div class="tabla-responiva">
            <table>
                <thead>
                    <tr>
                        ${createThElement(columns)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="acciones">
                            <a href="#"><i class="fa-solid fa-pen-to-square"></i></a>
                            <a href="#"><i class="fa-solid fa-trash"></i></a>
                        </td>
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

