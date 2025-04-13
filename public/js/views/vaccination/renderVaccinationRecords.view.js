import {renderVaccinationHistory} from './vaccination-history.component.js'
import {renderVaccinationRegistrationForm} from './vaccination-registration-form.component.js'

export function renderVaccinationRecords(app){
    app.innerHTML= `
    ${renderVaccinationHistory()}
    ${renderVaccinationRegistrationForm()}
    `;
}
