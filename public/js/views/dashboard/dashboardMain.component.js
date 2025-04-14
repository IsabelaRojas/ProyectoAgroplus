export function renderDashboardMain() {
    return `
    <main>
        <section class="bloques-proyecto"> 
            <div class="bloq-privado">
                <h1>Sección Privada</h1>
            </div>
            <ul>
                <li>
                    <a href="" class="bloq" id="btnAnimals">Animales</a>
                    <a href="" class="bloq" id= "btnVaccinacion">Vacunación</a>
                    <a href="" class="bloq" id= "btnDeworming">Desparasitación</a>
                    <a href="" class="bloq" id= "btonNotes">Notas</a>

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