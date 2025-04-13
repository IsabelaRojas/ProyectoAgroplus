import { renderNotesHistory } from '../notes/notes-history.component.js'
import { renderNotesRegistrationForm } from '../notes/notes-registration-form.component.js'

export function renderNotesRecords(app){
    app.innerHTML= `
    ${renderNotesRegistrationForm()}
    ${renderNotesHistory()}
    `;
}