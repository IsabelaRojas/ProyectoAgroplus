import { redirectTo } from '../../app.js'

import { renderHeader } from './header.view.js'
import { renderHero } from './hero.view.js'
import { renderFeatures } from './features.view.js'
import { renderCta } from './cta.view.js'
import { renderFooter } from './footer.view.js'

export function landingPage(app){
    
    app.innerHTML= `
    ${renderHeader()}
    ${renderHero()}
    ${renderFeatures()}
    ${renderCta()}
    ${renderFooter()}
    `;
    
    document.getElementById('loginBtn').addEventListener('click', () => {
        console.log('Login button clicked');
        redirectTo('/log-in');
    });

    document.getElementById('registerBtn').addEventListener('click', () => {
        console.log('SingUp button clicked');
        redirectTo('/sign-up');
    });
}

