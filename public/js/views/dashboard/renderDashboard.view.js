import { renderNavbar } from '../../components/layout/navbar.component.js'
import { renderFooter } from '../../components/layout/footer.component.js'
import { renderConfigModal } from '../../components/modal/config.modal.js'
import { renderDashboardMain } from './dashboardMain.component.js'
import { redirectTo } from '../../app.js'

export function renderDashboard(app){
    app.innerHTML= `
    <div class="layout">
        ${renderNavbar()}
        ${renderConfigModal()}
        ${renderDashboardMain()}
        ${renderFooter()}
    </div>
    `;

    
    document.getElementById('btnAnimals').addEventListener('click', () => {
        console.log('animals button clicked');
        redirectTo('/animals-record');
    });

    document.getElementById('btnVaccinacion').addEventListener('click', () => {
        console.log('Vaccinacion button clicked');
        redirectTo('/vaccination-record');
    });


    document.getElementById('btnDeworming').addEventListener('click', () => {
        console.log('Deworming button clicked');
        redirectTo('/deworming-record');
    });


    document.getElementById('btonNotes').addEventListener('click', () => {
        console.log('Notes button clicked');
        redirectTo('/notes-record');
    });
}