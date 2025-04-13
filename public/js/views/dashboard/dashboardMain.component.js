export function renderDashboardMain() {
    return `
    <main>
        <section class="bloques-proyecto"> 
            <div class="bloq-privado">
                <h1>Sección Privada</h1>
            </div>
            <ul>
                <li>
                    <a href="../../animales/HTML animals/historialanimales.html" class="bloq">Animales</a>
                    <a href="../../crias/HTML young/historialcrias.html" class="bloq"> Crias</a>
                    <a href="../../vacunacion/HTML vaccination/historialvacunacion.html" class="bloq">Vacunación</a>
                    <a href="../../Desparasitación/HTML deworming/historialdesparasitacion.html" class="bloq">Desparasitación</a>
                    <a href="../../notas/HTML notes/historialnotas.html" class="bloq">Notas</a>

                </li>
            </ul>
        </section>
        <div class="icon-whatsapp">
            <a href="https://wa.me/573133001189?" class="whatsapp" target="_blank">
                <img src="/assets/iconos/icons8-whatsapp.svg" alt="WhatsApp" />
            </a>
        </div>
    </main>
    `;
}