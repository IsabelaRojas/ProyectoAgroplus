import {renderDewormingHistory} from '../deworming/deworming-history.component.js'
import {renderDewormingRegistrationForm} from '../deworming/deworming-registration-form.component.js'

export function renderDewormingRecords(app){
    app.innerHTML= `
    ${renderDewormingRegistrationForm()}
    ${renderDewormingHistory()}
    `;
}