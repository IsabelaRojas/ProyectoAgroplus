import {renderAnimalsRegistrationForm} from '../animals/animal-registration-form.component.js';
import {renderAnimalHistory} from '../animals/animal-history.component.js';

export function renderAnimalRecords(app){
    app.innerHTML= `
    ${renderAnimalsRegistrationForm()}
    ${renderAnimalHistory()}
    `;
}