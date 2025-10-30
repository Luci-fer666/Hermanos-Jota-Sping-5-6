import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({inicio, productos, contactos, carrito, contadorCuenta}) {
    return (
	<>	
	<header className="site-header">
    	    <div className="branding">
      		    <a href="index.html" className="brand">
          	    	<img id="logo" src="/assets/img/logo.svg" alt="Icono Hermanos Jota"/>
      		    </a>
    	    </div>

    	    <nav className="site-nav" aria-label="Principal">
		    	<Link to="#!" onClick={(e) => { e.preventDefault(); inicio(); }}>Inicio</Link>
		    	<Link to="#!" onClick={(e) => { e.preventDefault(); productos(); }}>Productos</Link>
		    	<Link to="#!" onClick={(e) => { e.preventDefault(); contactos(); }}>Contacto</Link>
		    	<Link to="#!" onClick={(e) => { e.preventDefault(); carrito(); }}>
                    Carrito <span id="cart-count" aria-live="polite">{contadorCuenta}</span>
                </Link>
            </nav> 

			<form className="search" action="#" method="get" role="search">
			    <label htmlFor="q" className="visually-hidden">Buscar</label>
			    <input id="q" name="q" type="search" placeholder="Buscar muebles…" value=""/>
			    <button id="boton-buscar" type="submit">Buscar</button>
			</form>
	    </header>
		</>);
}
export default Navbar;