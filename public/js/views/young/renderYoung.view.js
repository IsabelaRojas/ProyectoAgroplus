import {renderYoungHistory} from '../young/young-history.component.js'
import {renderYoungRegistrationForm} from '../young/young-registration-form.component.js'


export function renderYoungRecords(app){
    app.innerHTML= `
    ${renderYoungHistory()}
    ${renderYoungRegistrationForm()}
    `;
}
