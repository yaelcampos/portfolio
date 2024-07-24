import React, { useState } from "react";
import Button from "../../components/button/button";
import { ReactComponent as Linkedln } from "../../images/linkedin.svg";
//import Github from "../../images/github_git_hub_logo_icon_132878.svg";
import Nube from "../../images/04-NUBE.png";
import Mail from "../../images/Mail.svg";
import Yael_con_cafe from "../../images/WhatsApp Image 2024-01-29 at 09.58.42 .jpeg";


const OnInternet = () => {
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario (por ejemplo, enviarlo a un servidor)
        setSubmitted(true);
        setTimeout(() => {
            setShowModal(false); // Cerrar el modal después de enviar el formulario
        }, 2000); // Tiempo de espera antes de cerrar el modal (2 segundos en este caso)
    };

    return (
        <div className="background_online">
            <div className="main-bio">
                <h3 className="main-bio_3">En linea</h3>
                <ul>
                    <li>
                        <a
                            href="/downloads/CamposYaelFrontEnd.pdf"
                            className="buttons"
                            download
                        >
                            <img className="img-nube" src={Nube} alt="Nube" />
                            Curriculum Vitae.pdf
                        </a>
                    </li>
                    <li>
                        <Button
                            href="https://www.linkedin.com/in/yael-campos/"
                            titulo="Linkedln"
                            icon={Linkedln}
                        />
                    </li>
                    {/*  
                    <li>
                        <Button
                            href="https://github.com/yaelcampos/portfolio"
                            titulo="Github"
                            icon={Github}
                        />
                    </li>
                    */}
                </ul>
            </div>
            <div>
                <img
                    src={Mail}
                    alt="Correo"
                    className="img-mail"
                    onClick={toggleModal}
                    style={{ cursor: "pointer" }}
                />
                <div className={`modal ${showModal ? 'modal-show' : 'modal-hide'}`}>
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>
                            &times;
                        </span>
                        {submitted ? (
                            <p>¡Gracias por comunicarte! </p>
                        ) : (
                            <>
                                <div className="contengo_imagen_popup" >
                                    <img
                                        className="img_yael_y_sucafe"
                                        src={Yael_con_cafe}
                                        alt="foto de Yael"
                                    />
                                    <p>¡Hola! 👋  </p>
                                    <h2>!Si estas interesado en mi trabajo,</h2>
                                    <h2>escribime!</h2>
                                </div>    

                                <form id="form" onSubmit={handleSubmit}>
                                    <div className="conteneiner-nombre_mail">
                                        <div className="conteiner-labels">
                                            <div className="conteneiner-nombre">
                                                <label htmlFor="nombre">Nombre</label>
                                                <input
                                                    type="text"
                                                    id="nombre"
                                                    name="nombre"
                                                    required
                                                />
                                            </div>
                                            <div className="conteneiner-email">
                                                <label htmlFor="email">Correo Electronico</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                />
                                            </div>

                                            <div className="conteinder_asunto">
                                                <label htmlFor="asunto">Asunto</label>
                                                <input
                                                    type="text"
                                                    id="asunto"
                                                    name="asunto"
                                                    required
                                                />
                                                <label htmlFor="mensaje">Enviar un mensaje</label>
                                                <textarea
                                                    className="mensaje"
                                                    id="mensaje"
                                                    name="mensaje"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button 
                                                className="button__send"
                                                type="submit">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnInternet