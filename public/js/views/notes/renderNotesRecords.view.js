import { renderNotesHistory } from './notes-history.component.js'
import { renderNotesRegistrationForm } from './notes-registration-form.component.js'

export function renderNotesRecords(app){
    app.innerHTML= `
    ${renderNotesRegistrationForm()}
    ${renderNotesHistory()}
    `;
}
