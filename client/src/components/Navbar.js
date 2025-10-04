import '../styles.css';
import logo from "../assets/img/logo.svg"; 

function Navbar({inicio, productos, contactos, carrito, carritoCuenta}) {
    return (
	<>	
	<header className="site-header">
    	    <div className="branding">
      		    <a href="index.html" className="brand">
          	    	<img id="logo" src={logo} alt="Icono Hermanos Jota"/>
      		    </a>
    	    </div>

    	    <nav className="site-nav" aria-label="Principal">
		    	<a href="#!" onClick={(e) => { e.preventDefault(); inicio(); }}>Inicio</a>
		    	<a href="#!" onClick={(e) => { e.preventDefault(); productos(); }}>Productos</a>
		    	<a href="#!" onClick={(e) => { e.preventDefault(); contactos(); }}>Contacto</a>
		    	<a href="#!" onClick={(e) => { e.preventDefault(); carrito(); }}>
                    <i class="fas fa-shopping-cart"></i>Carrito<span id="cart-count" aria-live="polite">0,{carritoCuenta}</span>
                </a>
            </nav> 

			<form className="search" action="productos.html" method="get" role="search">
			    <label for="q" className="visually-hidden">Buscar</label>
			    <input id="q" name="q" type="search" placeholder="Buscar muebles…" value=""/>
			    <button id="boton-buscar" type="submit">Buscar</button>
			</form>
	    </header>
		</>);
}
export default Navbar;