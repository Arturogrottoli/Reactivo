import React from 'react';

const Contacto = () =>{

     
        return (
            <div className={"row"}>
                <div className={"row p-5"}>
                    <div className={"col-lg-12 p-3"}>
                        <h2>Contactanos:</h2>
                    </div>
                    <div className={"col-lg-6"}>
                        <iframe title={"Google maps"}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.692982011626!2d-57.9531487851654!3d-34.91415348149583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63753b8b7af%3A0x427ad2b423cd53d4!2sAv.%207%20825%2C%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1634066874822!5m2!1ses!2sar"
                            width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <div className={"col-lg-6"}>
                        <p>CasacasFutbol ya tiene una trayectoria de más de diez años, ofreciendo productos de la mejor calidad del mercado. Tenemos nuestra tienda ubicada en la ciudad de La Plata (Ubicada en la calle 7 num 825) , pero tambien realizamos pedidos a todo lo largo y ancho del pais.
                        Consultar envios gratis al por mayor y financiación en cuotas sin interes. Ademas ofrecemos diversas modalidades de pago.
                        </p>
                        <p>Nuestras vías de contacto son:</p>
                       <ul>
                           <li>Teléfono: +549 221-458921XX (Podes enviarnos tu whatsapp)</li>
                           <li>Email: contacto@casacasfutbol.com</li>
                           <li>Visitá nuestras redes sociales!</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }

    
    export default Contacto;