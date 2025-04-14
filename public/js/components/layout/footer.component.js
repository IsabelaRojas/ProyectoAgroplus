import { redirectTo } from '../../app.js';

export function renderFooter() {
    return `
     <footer>
        <div class="cerrar-sesion">
            <a id="go-to-landingPage" >Cerrar Sesion</a>
        </div>
    </footer>
    `;
}
// document.getElementById('go-to-landingPage').addEventListener('click', () => {
//     console.log('footer button clicked');
//     redirectTo('/');
// });