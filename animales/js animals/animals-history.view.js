export function renderAnimalsHistory(root) {
    root.innerHTML = `
      <!-- Contenido principal -->
    <main>
        <!-- Bloque de registro -->
        <div class="bloq-registrer">
            <a href="./animales.html">
                <i class="fa-solid fa-plus"></i> Registrar Nuevo Ganado
            </a>
        </div>

        <!-- Título principal -->
        <div class="bloq-privado">
            <h1>Historial Animales</h1>
        </div>

        <!-- Bloques principales del proyecto -->
        <div class="bloques-proyecto">


            <!-- Tabla de historial -->
            <div class="tabla-historial">
                <div class="tabla-responiva">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de ganado</th>
                                <th>Animal</th>
                                <th>ID Animal</th>
                                <th>Sexo del Animal</th>
                                <th>Fecha de compra</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vacuno</td>
                                <td>Vaca</td>
                                <td>0258</td>
                                <td>Hembra</td>
                                <td>05/02/2023</td>
                                <td class="acciones">
                                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                                    <a href="#"><i class="fa-solid fa-pen-to-square"></i></a>
                                    <a href="#"><i class="fa-solid fa-trash"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
              <!-- Paginación -->
              <div class="paginacion">
                <a href="#" class="active">1</a>
                <a href="#"><i class="fa-solid fa-angle-right"></i></a>
            </div>
        </div>
    </main>


    <footer>
        <div class="cerrar-sesion">
            <a href="../../auth/View HTML/Index.html">Cerrar Sesión</a>
        </div>
    </footer>

</body>
</html>`} 