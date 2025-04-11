export function renderSignUp(root) {
    root.innerHTML = `
        <section class="container-form">
          <div class="text-sign-up">
            <h2>Registrarme</h2>
          </div>
          <div class="div-form-registration">
            <form id="sign-up-form">
              <input class="controls" type="text" name="name" id="name" placeholder="Nombre" required>
              <input class="controls" type="email" name="correo_electronico" id="email" placeholder="Correo Electrónico" required>
              <input class="controls" type="number" name="phone" id="phone" placeholder="Teléfono" required>
              <input class="controls" type="password" name="contrasena" id="password" placeholder="Contraseña" required>
              <input class="controls" type="password" name="confirmar_contrasena" id="confirm-password" placeholder="Confirmar Contraseña" required>
              <input class="controls" type="submit" value="Registrarme">
            </form>
          </div>
          <div class="div-account"> 
            <a href="#" id="go-to-login">¿Ya tengo cuenta?</a>
          </div>
        </section>
    `;
}