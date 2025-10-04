import '../styles.css';
function ContactForm() {
    return (
        <div className="main-container">
        <div className="container-form">
          <h2>¡Dejanos tu mensaje!</h2>

          <form id="form-contacto" className="formulario" action="#" method="post" novalidate>
            <div className="campo-formulario">
              <label for="nombre">Nombre:</label>
              <input id="nombre" name="nombre" type="text" placeholder="Ingrese su nombre" className="campo" required />
            </div>

            <div className="campo-formulario">
              <label for="email">Correo electrónico:</label>
              <input id="email" name="email" type="email" placeholder="Ingrese su email" className="campo" required />
            </div>

            <div className="campo-formulario">
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribí tu mensaje aquí" required></textarea>
            </div>

            <button type="submit" className="boton-enviar">Enviar</button>
          </form>
        </div>

        <div className="contacto-info">
          <h2>Información de contacto</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <b>Av. San Juan 2847, C1232AAB — San Cristóbal</b>, CABA, Argentina
          </p>

          <p>
            <i className="fab fa-instagram"></i>
            <a href="https://alt-5a31a0302d72d.blackboard.com/bbcswebdav/pid-982156-dt-content-rid-14612411_1/courses/FSD.00-43441/Instagram%20copy/index.html?one_hash=0F722C37711BD6305A77E4FFDCE89EB4&f_hash=15268A94162158099670952E71AA8CBC" target="_blank" rel="noreferrer">
              <b>@hermanosjota_ba</b>
            </a>
          </p>

          <p>
            <i className="fa-brands fa-whatsapp"></i>
            <a href="tel:+541145678900">+54 11 4567-8900</a>
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>
            Email general:
            <a href="mailto:info@hermanosjota.com.ar"><b>info@hermanosjota.com.ar</b></a>
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>
            Email ventas:
            <a href="mailto:ventas@hermanosjota.com.ar"><b>ventas@hermanosjota.com.ar</b></a>
          </p>

          <div>
            <p className="Multimedia">
              <iframe title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2168256706846!2d-58.40735388811463!3d-34.62396057283415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae2a0c04a2f%3A0x77f381af8f0ca1fa!2sAv.%20San%20Juan%202847%2C%20C1232AAK%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1756442326135!5m2!1ses!2sar"
                width="100%" height="250" allowfullscreen="" loading="lazy"></iframe>
            </p>
          </div>
        </div>
      </div>
    );
}
export default ContactForm;