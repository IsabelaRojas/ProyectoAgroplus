import {renderAnimalsRegistrationForm} from './animal-registration-form.component.js';
import {renderAnimalHistory} from './animal-history.component.js';

export function renderAnimalRecords(app){
    app.innerHTML= `
    ${renderAnimalsRegistrationForm()}
    ${renderAnimalHistory()}
    `;
}
