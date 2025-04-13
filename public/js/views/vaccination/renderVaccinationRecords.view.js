import {renderVaccinationHistory} from '../vaccination/vaccination-history.component.js'
import {renderVaccinationRegistrationForm} from '../vaccination/vaccination-registration-form.component.js'

export function renderVaccinationRecords(app){
    app.innerHTML= `
    ${renderVaccinationHistory()}
    ${renderVaccinationRegistrationForm()}
    `;
}
