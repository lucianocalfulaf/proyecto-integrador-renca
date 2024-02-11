import './footer-styles/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footer__section">
                <img src="/src/assets/renca.png" className="footer__logo" />

                <ul className="footer__list">
                    <li className="footer__item"><i className="fa-solid fa-location-dot"></i><span>Blanco Encalada Nº 1335, Plaza de Renca, Renca.</span></li>
                    <li className="footer__item"><i className="fa-solid fa-phone"></i><span>+56 2 2685 6600</span></li>
                    <li className="footer__item"><i className="fa-solid fa-envelope"></i><span>contacto@renca.cl</span></li>
                    <li className="footer__item"><i className="fa-regular fa-clock"></i><span>Atención Social Teléfonica:</span></li>
                    <li className="footer__item"><span>+56 2 3241 1999, de lunes a viernes de 08:30 a 14:00 horas 15:00 a 17:00 horas.</span></li>
                    <li className="footer__item"><span>© 2024 Municipalidad de Renca - Proyecto integrador en desarrollo Generation</span></li>
                </ul>

            </div>

            <div className="footer__socials">
                <h2>Redes Sociales</h2>
                <ul className="footer__contact">
                    <li className="footer__item"><i className="fa-brands fa-facebook-f"></i></li>
                    <li className="footer__item"><i className="fa-brands fa-x-twitter"></i></li>
                    <li className="footer__item"><i className="fa-brands fa-instagram"></i></li>
                    <li className="footer__item"><i className="fa-brands fa-flickr"></i></li>
                    <li className="footer__item"><i className="fa-brands fa-youtube"></i></li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;