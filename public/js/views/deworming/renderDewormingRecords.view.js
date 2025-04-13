import {renderDewormingHistory} from './deworming-history.component.js'
import {renderDewormingRegistrationForm} from './deworming-registration-form.component.js'

export function renderDewormingRecords(app){
    app.innerHTML= `
    ${renderDewormingRegistrationForm()}
    ${renderDewormingHistory()}
    `;
}
