export function renderRecordsTable(columns, animalData) {
    return `
    <!-- Tabla de historial -->
    <div id="tabla-registro-animales" class="tabla-historial">
        <div class="tabla-responiva">
            <table>
                <thead>
                    <tr>
                        ${createThElement(columns)}
                    </tr>
                </thead>
                <tbody id="animal-history-rows">
                    ${createRowsByRegister(columns, animalData)}
                </tbody>
            </table>
        </div>
        
    </div>
    `;
}

function createThElement(columns) {
    return columns.map(column => `<th>${column}</th>`).join('');
}

export const columnTranslations = {
    'Tipo de ganado': 'livestockType',
    'Tipo de Animal': 'animalType',
    'Raza': 'breed',
    'Codigo animal': 'code',
    'Sexo': 'sex',
    'Madre': 'motherId',
    'Padre': 'fatherId',
    'Fecha de nacimiento': 'birthDate',
    'Fecha de regsitro': 'registeredAt',
};

export const valueTranslations = {
    'Male': 'Macho',
    'Female': 'Hembra',
};

export function createRowsByRegister(columns, animalData) {
    animalData.forEach(animal => {
        if (animal.sex) {
            animal.sex = valueTranslations[animal.sex];
        }
        if (animal.birthDate) {
            animal.birthDate = animal.birthDate.split('T')[0];
        }
        if (animal.registeredAt) {
            animal.registeredAt = animal.registeredAt.split('T')[0];
        }
        if(animal.userId){
            delete animal.userId;
        }
    });

    columns = columns.filter(column => column.toLowerCase() !== 'opciones');

    const rows = animalData.map(animal => {
        const { id, ...animalWithoutId } = animal; // Remove id from the object but keep it for the tr
        return `
        <tr id="${id || ''}">
            ${columns.map(column => `<td>${animalWithoutId[columnTranslations[column]] || ''}</td>`).join('')}
            <td class="acciones">
                <a><i class="fa-solid fa-pen-to-square botton-edit" id="btn-edit"></i></a>
                <a><i class="fa-solid fa-trash botton-delete" id='btn-delete'></i></a>
            </td>
        </tr>
        `;
    }).join('');
    return rows;
}

