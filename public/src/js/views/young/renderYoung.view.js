import {renderYoungHistory} from '../young/young-history.component.js'
import {renderYoungRegistrationFrom} from '../young/young-registration-form.component.js'


export function renderYoungRecords(app){
    app.innerHTML= `
    ${renderYoungHistory()}
    ${renderYoungRegistrationFrom()}
    `;
}