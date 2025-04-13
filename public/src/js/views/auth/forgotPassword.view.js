import { renderHeader } from "../landing-page/header.view.js";

export function renderForgotPassword(app) {
    app.innerHTML = `
    ${renderHeader()}
    <main class= "background-login">
    <div class="div-form-registration">
                <form action="">
                    <input class="controls" type="email" name="correo_electronico" id="email" placeholder="Correo Electronico" required>
                    <input class="controls" type="submit" value="Restablecer contraseña">
                </form> 
            </div>
            <div class="div-ancla">
                <a href="./log-in.html">Volver al inicio</a>
            </div>
    </main>`;
} 