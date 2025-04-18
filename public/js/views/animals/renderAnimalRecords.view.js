import { renderAnimalsRegistrationForm, createOptionElement} from '../animals/animal-registration-form.component.js';
import { renderAnimalHistory, columns } from '../animals/animal-history.component.js';
import { createRowsByRegister, columnTranslations, renderRecordsTable } from '../../components/layout/records-table.component.js';
import { renderNavbar } from '../../components/layout/navbar.component.js'
import { renderFooter } from '../../components/layout/footer.component.js'
import { renderConfigModal } from '../../components/modal/config.modal.js'
import { createAnimalApi, getAnimalApi, deleteAnimalApi, updateAnimalApi } from '../../api/animal.api.js'



//ELEMENTOS CLAVE: document.getElementById: Es un método que permite acceder a un elemento del DOM utilizando su atributo id. Es una forma común de interactuar con elementos HTML desde JavaScript.
//Constantes (const): Se usan para almacenar las referencias a los elementos seleccionados. Esto asegura que no se reasignen accidentalmente en el código.
export const translateSex = {
    'Macho': 'Male',
    'Hembra': 'Female',
    'macho': 'Male',
    'hembra': 'Female',
}

export async function renderAnimalRecords(app){
    app.innerHTML= `
    <div class="layout">
        ${renderNavbar()}
        ${renderAnimalsRegistrationForm()}
        ${renderAnimalHistory([])}
        ${renderConfigModal()}
        ${renderFooter()}
    </div>
    `;

    const registeredAnimals = await getAnimalApi('null'); //Se obtienen los datos de animales desde la API (getAnimalApi).
    const main = document.getElementById('main-animal-history'); //Se selecciona el contenedor principal en el DOM (main-animal-history).
    main.innerHTML = renderAnimalHistory(registeredAnimals.animals); //Se actualiza el contenido del contenedor con un HTML dinámico generado por renderAnimalHistory.

    

    const btnAbrirModal = document.getElementById('btn-registrar-animales'); //se obtiene una referencia al elemento HTML con el atributo id="btn-registrar-animales".
    const modalFormulario = document.getElementById('modal-formulario'); //Se obtiene el elemento con id="modal-formulario".
    const cerrarFormulario = document.getElementById('cerrar-formulario'); //Aquí se selecciona el elemento con id="cerrar-formulario".
    const formulario = document.getElementById('form-animal'); // Se obtiene el formulario con id="form-animal".Se obtiene el formulario con id="form-animal".
    const modalExito = document.getElementById('mensaje-exito'); // Se selecciona el elemento con id="mensaje-exito".
    const cerrarExito = document.getElementById('cerrar-exito'); // Aquí se obtiene el elemento con id="cerrar-exito".
    const btnCerrarExito = document.getElementById('cerrar-modal-exito'); // Se selecciona el elemento con id="cerrar-modal-exito".
    
    const selectFilter = document.querySelector('.select-filter')
    selectFilter.addEventListener('change', async (e) => {
        const filterValue = e.target.value;
        const filteredAnimals = registeredAnimals.animals.filter(animal => {
            if (filterValue === 'crias') {
                return animal.motherId || animal.fatherId; 
            } else if (filterValue === 'animales') {
                return !animal.motherId && !animal.fatherId;
            }
            return true; 
        });
        const tablaContainer = document.getElementById('tabla-registro-animales').parentElement;
        tablaContainer.innerHTML = renderRecordsTable(columns, filteredAnimals);
    });


    document.querySelector('.container-form').addEventListener('click', async (e) => {
        if (e.target.classList.contains('select-father')) {
            const tipoGanado = document.getElementById('tipo-ganado').value;
            const filteredAnimals = await getAnimalApi(`livestockType=${tipoGanado}`);

            const option = document.querySelector('.option-select');
            const parent = option.parentElement;

            // Remove existing options before adding new ones
            parent.querySelectorAll('.option-select ~ option').forEach(el => el.remove());

            const options = createOptionElement(filteredAnimals.animals, 'Macho');
            option.insertAdjacentHTML('afterend', options); // Insert options as siblings after the option element
        } else if (e.target.classList.contains('select-mother')) {
            const tipoGanado = document.getElementById('tipo-ganado').value;
            const filteredAnimals = await getAnimalApi(`livestockType=${tipoGanado}`);
            
            const option = document.querySelector('.option-select');
            const parent = option.parentElement;
            // Remove existing options before adding new ones
            parent.querySelectorAll('.option-select + *').forEach(el => el.remove());

            const options = createOptionElement(filteredAnimals.animals, 'Hembra');
            option.insertAdjacentHTML('afterend', options); // Insert options as siblings after the option element
        }
    });

    // Abrir el modal del formulario
    btnAbrirModal.addEventListener('click', async (e) => {
        modalFormulario.style.display = 'block';
    });
    // Clear form inputs when closing the modal
    cerrarFormulario.addEventListener('click', () => {
        formulario.reset();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalFormulario) {
            formulario.reset();
        }
    });
    // Cerrar el modal del formulario
    cerrarFormulario.addEventListener('click', () => {
        modalFormulario.style.display = 'none';
    });

    // Cerrar al hacer clic fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === modalFormulario) {
            modalFormulario.style.display = 'none';
        }
        if (e.target === modalExito) {
            modalExito.style.display = 'none';
        }
    });
    
    // Evitar que los clics dentro del modal se propaguen al window
    document.querySelectorAll('.modal-contenido').forEach(modal => {
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Enviar formulario y mostrar modal de éxito
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        const tipoGanado = document.getElementById('tipo-ganado').value;
        const tipoAnimal = document.getElementById('tipo-animal').value;
        const razaAnimal = document.getElementById('raza-animal').value;
        const codigoAnimal = document.getElementById('codigo-animal').value;
        const sexo = document.getElementById('sexo').value;
        const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        const idPadre = document.getElementById('id-padre').value;
        const idMadre = document.getElementById('id-madre').value;



        //Algunas propiedades siempre están presentes (livestockType, animalType, code).
        //Otras propiedades solo se incluyen si tienen un valor válido (breed, birthDate, fatherId, motherId).
        //Se realiza una traducción condicional para el sexo del animal.
        const animalData = {
            livestockType: tipoGanado,
            animalType: tipoAnimal,
            code: codigoAnimal,
            ...(razaAnimal && { breed: razaAnimal }), //en caso la propiedad razaAnimal no sea vacía, se agrega la propiedad breed al objeto animalData
            sex: translateSex[sexo] || sexo,
            ...(fechaNacimiento && { birthDate: fechaNacimiento }),
            ...(idPadre && { fatherId: idPadre }),
            ...(idMadre && { motherId: idMadre }),
        };
        

        //Actualizar registro existente o crear uno nuevo de un animal
        if (e.submitter && e.submitter.id === 'actualizar-registro') {
            const animalId = document.getElementById('codigo-animal').getAttribute('animal-id');
            const dataApi = await updateAnimalApi(animalId, animalData);

            if (dataApi.success === true) { //Si la respuesta del servidor es exitosa, se oculta el modal de formulario y se muestra el modal de éxito.
            modalFormulario.style.display = 'none';
            modalExito.style.display = 'block';

            const row = document.getElementById(animalId);
            console.log('row:', row);
            if (row && row.tagName === 'TR') { //Se busca la fila correspodiente al animalId en la tabla de historial de animales.
                const updatedRow = createRowsByRegister(columns, [dataApi.updatedAnimal]); //si la fila existe, se crea una nueva fila con los datos actualizados del animal.
                row.outerHTML = updatedRow; //y se remplaza la fila antigua por la nueva fila con row.outerHTML.
            }
            }
        } else {
            const dataApi = await createAnimalApi(animalData); //se llama a la funcio createAnimalApi que realiza una solicitud POST al servidor para crear un nuevo registro. La respuesta del servidor se guarda en dataApi
            

            //Si la creación es exitosa, se oculta el formulario y se muestra el modal de éxito.
            if(dataApi.success === true){
                modalFormulario.style.display = 'none';
                modalExito.style.display = 'block';
    

            //Se selecciona el <tbody> de la tabla donde se listan los registros (animal-history-rows).
            //Se genera una nueva fila para el animal recién creado usando createRowsByRegister.
            //La nueva fila se agrega al final de la tabla con insertAdjacentHTML('beforeend', newRow).
                const tbody = document.getElementById('animal-history-rows');
                const newRow = createRowsByRegister(columns, [dataApi.newAnimal]);
                tbody.insertAdjacentHTML('beforeend', newRow);
            }
        }

    });

    // Cerrar modal de éxito
    cerrarExito.addEventListener('click', () => {
        modalExito.style.display = 'none';
    });

    btnCerrarExito.addEventListener('click', () => {
        modalExito.style.display = 'none';
    });

    // Ensure the update button is hidden and the create button is shown when closing the modal
    cerrarFormulario.addEventListener('click', () => { //Se esta añadiendo un event listener al elementoo cerrarFormulario
        document.getElementById('actualizar-registro').classList.add('hidden');//Se accede a su lista de clases (classList) y se utiliza el método add para añadir la clase hidden.
        document.getElementById('crear-registro').classList.remove('hidden');// se accede a su lista de clases (classList) y se utiliza el método .remove('hidden') para eliminar la clase 'hidden' de ese elemento.
    });

    // Ensure the update button is hidden and the create button is shown when clicking outside the modal
    window.addEventListener('click', (e) => {
        if (e.target === modalFormulario) { //Se verifica si el elemento clikckeado es el modalFormulario.
            document.getElementById('actualizar-registro').classList.add('hidden');
            document.getElementById('crear-registro').classList.remove('hidden');
        }
    });

    //controlador de eventos para el botón de editar y eliminar
    
    document.querySelector('.tabla-historial').addEventListener('click', async function (event) { //se agrega un nuevo evento click a la tabla, significa que cualquier elemento dentro de la tabla sera capturado
        if(event.target.classList.contains('botton-edit')){ //Se verifica si el elemento clickeado (event.target) tiene la clase botton-edit. Esto indica que el clic fue en un botón de edición.
            event.preventDefault();
            console.log('si funciona el evento de editar');
            const row = event.target.closest('tr');
            const animalId = row.id;
            const cells = row.querySelectorAll('td');
    
            const animalData = {};
            columns.forEach((column, index) => {
                const key = columnTranslations[column];
                if (key) {
                    animalData[key] = cells[index].textContent.trim();
                }
            });
            // Populate the form with the animal data
            document.getElementById('tipo-ganado').value = animalData.livestockType || '';
            document.getElementById('tipo-animal').value = animalData.animalType || '';
            const codigoAnimalInput = document.getElementById('codigo-animal');
            codigoAnimalInput.value = animalData.code || '';
            codigoAnimalInput.setAttribute('animal-id', animalId); // Set the animal-id attribute
    
            document.getElementById('raza-animal').value = animalData.breed || '';
            
            // Set the value for the "sexo" select input
            const sexoInput = document.getElementById('sexo');
            sexoInput.value = animalData.sex ? animalData.sex.toLowerCase() : '';
    
            // Set the value for the "fecha-nacimiento" input
            const birthDateInput = document.getElementById('fecha-nacimiento');
            birthDateInput.value = animalData.birthDate ? animalData.birthDate.split('T')[0] : '';
    
            document.getElementById('id-padre').value = animalData.fatherId && animalData.fatherId !== 'null' ? animalData.fatherId : '';
            document.getElementById('id-madre').value = animalData.motherId && animalData.motherId !== 'null' ? animalData.motherId : '';
    
            document.getElementById('actualizar-registro').classList.remove('hidden');
            document.getElementById('crear-registro').classList.add('hidden');
            modalFormulario.style.display = 'block';
        } else if (event.target.classList.contains('botton-delete')) {
            event.preventDefault();
            console.log('si funciona el evento de eliminar');
            const row = event.target.closest('tr');
            const animalId = row.id;

            const modalConfirmation = document.getElementById('confirmar-eliminacion');
            modalConfirmation.style.display = 'block';
            // Confirm deletion
            document.getElementById('btn-confirmar-eliminacion').onclick = async function() {
                const dataApi = await deleteAnimalApi(animalId);
                if(dataApi.success === true){
                    modalConfirmation.style.display = 'none';
                    row.remove(); // Remove the row from the tabl
                    modalExito.style.display = 'block';
                }
            };
    
            // Cancel deletion
            document.getElementById('btn-cancelar-eliminacion').onclick = function() {
                modalConfirmation.style.display = 'none';
            };

        }
        
    });

}
