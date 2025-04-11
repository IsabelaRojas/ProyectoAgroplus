export function renderLogIn(root) {
root.innerHTML = `
<section class="container-formulario">
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
      
    <div class="div-forgot-password">
        <a href="./forgotPassword.html">¿Olvidó su contraseña?</a>
    </div>
    
    <div class="div-registrarse">
        <a href="./sign-up.html">Regístrese aquí</a>
    </div>
</section>`
} 
