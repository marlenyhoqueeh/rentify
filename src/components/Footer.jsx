import React from 'react';
function Footer() {
    return (
        <footer>
            <div class="column"><strong>¿Quienes somos?</strong>
                <p>Misión</p>
                <p>Visión</p>
                <p>Objetivos</p>
            </div>
            <div class="column"><strong>Más sobre Rentify</strong>
                <p>Políticas de privacidad</p>
                <p>Términos de servicio</p>
                <p>Más sobre Rentify</p>
            </div>
            <div class="column"><strong>Regístrate aquí</strong>
                <p>Soy una empresa</p>
                <p>Soy emprendedor(a)</p>
                <p>Soy cliente</p>
            </div>
            <p class="black">© {new Date().getFullYear()} Rentify - Todos los derechos reservados</p>
        </footer>
    );
}
export default Footer;
