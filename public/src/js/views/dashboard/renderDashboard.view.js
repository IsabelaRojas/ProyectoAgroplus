import { renderNavbar } from '../../components/layout/navbar.component.js'
import { renderFooter } from '../../components/layout/footer.component.js'
import { renderConfigModal } from '../../components/modal/config.modal.js'
import { renderDashboardMain } from './dashboardMain.component.js'

export function renderDashboard(app){
    app.innerHTML= `
    ${renderNavbar()}
    ${renderConfigModal()}
    ${renderDashboardMain()}
    ${renderFooter()}
    `;
}