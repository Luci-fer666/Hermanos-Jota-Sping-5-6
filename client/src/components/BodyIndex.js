import './BodyIndex.css';

function IndexBody() {
    return (<>
            <div className="productos">
                <div className="background-main">
                    <main>
                        <article>
                            <section>
                                <h2 id="bienvenida">Bienvenidos a Mueblería Hermanos Jota</h2>
                            </section>
                            <section>
                                <div className="historia">
                                    <h2>Nuestra historia</h2>
                                    <p>Hermanos Jota nace como el redescubrimiento de un arte olvidado: el de crear muebles que no solo cumplen una función, sino que despiertan emociones. Nuestra historia se teje entre la herencia de la artesanía tradicional y la innovación consciente del presente. Inspirados por el optimismo de los años 60 y guiados por los valores de sustentabilidad del 2025, cada pieza que diseñamos honra el pasado mientras abraza el futuro. No somos solo fabricantes de mobiliario: somos narradores de historias, guardianes de legado y creadores de belleza cotidiana.</p>
                                </div>         
                                <div className="que-ofrecemos">
                                    <h2>¿Qué ofrecemos?</h2>
                                    <p>Ofrecemos mucho más que muebles: ofrecemos experiencias que perduran. Cada producto de Hermanos Jota está pensado para acompañarte en tu día a día con calidez, funcionalidad y carácter. Usamos materiales nobles, técnicas responsables y principios de diseño atemporal para crear piezas que envejecen con gracia y se integran naturalmente a tu vida. Desde camas que invitan al descanso profundo hasta aparadores que cuentan su propia historia, cada objeto es una inversión en calidad, estética y conciencia.</p>
                                </div>
                            </section>
                            <section> 
                                <div>
                                    <div className="Multimedia">
                                        <video id="video" controls autoplay>
                                            <source src="/assets/docs/Video institucional Hermanos Jota.mp4" type="video/mp4"/>
                                            <img src="/assets/img/logo.svg" alt="Video no soportado"/>
                                            Tu navegador no soporta el video mostrado
                                        </video>
                                    </div>
                                </div>
                            </section>                           
                        </article>   
                    </main>
                </div>
            </div>
            </>); }
export default IndexBody;