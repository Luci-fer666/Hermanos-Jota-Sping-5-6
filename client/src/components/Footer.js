import './Footer.css';
function Footer({inicio, productos, contactos}) {
    return(
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Enlaces</h3>
                    <ul>
                        <li><a href="#!" onClick={(e) => { e.preventDefault(); inicio(); }}>Inicio</a></li>
                        <li><a href="#!" onClick={(e) => { e.preventDefault(); productos(); }}>Productos</a></li>
                        <li><a href="#!" onClick={(e) => { e.preventDefault(); contactos(); }}>Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Red social</h3>
                    <ul className="social-media">
                        <li>
                            <a href="https://alt-5a31a0302d72d.blackboard.com/bbcswebdav/pid-982156-dt-content-rid-14612411_1/courses/FSD.00-43441/Instagram%20copy/index.html?one_hash=0F722C37711BD6305A77E4FFDCE89EB4&f_hash=15268A94162158099670952E71AA8CBC" target="_blank" rel="noreferrer" aria-label="Instagram">
                             Instagram</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul>
                        <li><strong>Dirección: </strong>Av. San Juan 2847,C1232AAB — Barrio de San Cristóbal,
                Ciudad Autónoma de Buenos Aires, Argentina</li>
                        <li><strong>Teléfono: </strong>+54 11 4567-8900</li>
                        <li><strong>Email: </strong><a href="mailto:info@hermannosjota.com.ar">info@hermanosjota.com.ar</a></li>
                    </ul>
                </div>
            </div>
	    </footer>);
}
export default Footer;