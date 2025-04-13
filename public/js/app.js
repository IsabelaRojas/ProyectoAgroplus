console.log('app.js loaded');

import { landingPage } from './views/landing-page/landing-page.view.js';
import { renderSignUp } from './views/auth/signUp.view.js';
import { renderLogIn } from './views/auth/logIn.view.js';
import { renderForgotPassword } from './views/auth/forgotPassword.view.js';
import { renderDashboard } from './views/dashboard/renderDashboard.view.js';
import { renderAnimalRecords} from './views/animals/renderAnimalRecords.view.js';
import { renderYoungRecords } from './views/young/renderYoung.view.js';
import { renderDewormingRecords } from './views/deworming/renderDewormingRecords.view.js';
import { renderNotesRecords } from './views/notes/renderNotesRecords.view.js';
import { renderVaccinationRecords} from './views/vaccination/renderVaccinationRecords.view.js';


const routes = {
    //Landing Page
    '/': landingPage,
    
    //auth 
    '/sign-up': renderSignUp,
    '/log-in': renderLogIn,

    //dashboard
    '/dashboard': renderDashboard,

    //animals
    '/animals-record': renderAnimalRecords,

    //young
    '/young-record': renderYoungRecords,

    //deworming
    '/deworming-record': renderDewormingRecords,

    //notes
    '/notes-record': renderNotesRecords,

    //vaccination
    '/vaccination-record': renderVaccinationRecords,
};

function renderPage(route) {
    const app = document.getElementById('app');
    const renderFunction = routes[route] || routes['/'];
    renderFunction(app);
}

//Redirigir al usuario desde el sistema
export function redirectTo(route) {
    window.history.pushState({}, '', route);
    renderPage(route);
}



//Detectar la url que coloco el usuario en el navegador y cargar la vista correspondiente
window.addEventListener('popstate', () => {
    renderPage(location.pathname);
});

renderPage(location.pathname);
