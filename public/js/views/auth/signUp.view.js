import { renderHeader } from "../landing-page/header.view.js";
import { redirectTo } from '../../app.js'
import { signUpApi } from '../../api/auth.api.js';

export function renderSignUp(app) {
    app.innerHTML = 
    `
    ${renderHeader()}
    <main class= "background-login">
     <section class="container-form container-form-auth">
          <div class="text-sign-up">
            <h2>Registrarme</h2>
          </div>
          <div class="div-form-registration">
            <form id="sign-up-form">
              <input class="controls" type="text" name="name" id="name" placeholder="Nombre" required>
              <input class="controls" type="email" name="correo_electronico" id="email" placeholder="Correo Electrónico" required>
              <input class="controls" type="password" name="contrasena" id="password" placeholder="Contraseña" required>
              <input class="controls" type="password" name="confirmar_contrasena" id="confirm-password" placeholder="Confirmar Contraseña" required>
              <input class="controls" type="submit" value="Registrarme">
            </form>
          </div>
          <div class="div-account"> 
            <a href="#" id="go-to-login">¿Ya tengo cuenta?</a>
          </div>
        </section>
    </main>`;

    document.getElementById('sign-up-form').addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirm-password').value.trim();
  
      const nameRegex = /^[a-zA-Z\s]{2,}$/;
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const passwordRegex = /^.{8,}$/;
  
      if (!nameRegex.test(name)) {
          alert('El nombre debe ser mas largo');  
          return;
      }
  
      if (!emailRegex.test(email)) {
          alert('Correo electrónico no válido');
          return;
      }
  
      if (!passwordRegex.test(password)) {
          alert('La contraseña debe tener al menos 6 caracteres');
          return;
      }
  
      if (password !== confirmPassword) {
          alert('Las contraseñas no coinciden');
          return;
      }

      const signUpData = {
          name: name,
          email: email,
          password: password
      }

      const dataApi = await signUpApi(signUpData);
      console.log('Respuesta de la API. response.json():', dataApi);

      if(dataApi.status === 201 || dataApi.success === true){
          console.log('Registro exitoso:', dataApi.data);
          redirectTo('/log-in');
      } else {
          alert('Error en el registro. Intente nuevamente.');
      }
      
  });  

    document.getElementById('go-to-login').addEventListener('click', () => {
      console.log('linkSignUp button clicked');
      redirectTo('/log-in');
  });
}