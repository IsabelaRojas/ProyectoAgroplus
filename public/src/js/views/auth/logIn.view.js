import { renderHeader } from "../landing-page/header.view.js";
import { redirectTo } from '../../app.js';
import { logInApi } from '../../api/auth.api.js';


export function renderLogIn(app) {
    app.innerHTML = `
    ${renderHeader()}
    <main class="background-login">
        <section class="container-form container-form-auth">
            <div class="text-log-in">
                <h2>Iniciar Sesión</h2>
            </div>
            <div class="div-formulario" id="login-container">
                <form id="form-login">
                    <input class="controls" type="email" name="correo_electronico" id="email" placeholder="Correo Electronico" required>
                    <input class="controls" type="password" name="contrasena" id="password" placeholder="Contraseña" required>
                    <input class="controls" type="submit" value="Iniciar sesión">
                </form>
                <div id="mensaje-exito">¡Inicio de sesión exitoso!</div>
            </div>
        
            <div id="dashboard-container" style="display: none;"></div>
            
            <div class="div-registrarse">
                <a href="#" id="link-signup">Regístrese aquí</a>
            </div>
        </section>
    </main>`;

    document.getElementById('form-login').addEventListener('submit', async function (event) {
        event.preventDefault(); 
    
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
    
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        const passwordRegex = /^.{8,}$/; // Al menos 8 caracteres
    
        if (!emailRegex.test(email)) {
            alert('Correo electrónico no válido');
            return;
        }
    
        if (!passwordRegex.test(password)) {
            alert('La contraseña debe tener al menos 8 caracteres');
            return;
        }

        const loginData = {
            email: email,
            password: password
        }

        const dataApi = await logInApi(loginData);
        console.log('Respuesta de la API. response.json():', dataApi);

        if(dataApi.status === 200){
            console.log('Inicio de sesión exitoso:', dataApi.data);
            redirectTo('/dashboard');
        }
    });
    
    document.getElementById('link-signup').addEventListener('click', () => {
        console.log('linkSignUp button clicked');
        redirectTo('/sign-up');
    });

    // <div class="div-forgot-password">
    //     <a href="#" id="link-forgot">¿Olvidó su contraseña?</a>
    // </div>
    } 

    
    