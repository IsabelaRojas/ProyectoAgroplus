import {renderYoungHistory} from './young-history.component.js'
import {renderYoungRegistrationForm} from './young-registration-form.component.js'



export function renderYoungRecords(app){
    app.innerHTML= `
    ${renderYoungHistory()}
    ${renderYoungRegistrationForm()}
    `;
}
