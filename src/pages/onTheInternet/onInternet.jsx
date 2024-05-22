import React, { useState } from "react";
import Button from "../../components/button/button";
import { ReactComponent as Linkedln } from "../../images/linkedin.svg";
import { ReactComponent as Instagran } from "../../images/instagram.svg";
import Nube from "../../images/04-NUBE.png";
import Mail from "../../images/Mail.svg";

const OnInternet = () => {
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Aquí puedes agregar lógica para enviar el formulario, si es necesario
        // Por ahora, solo lo marcaremos como enviado
    };

    return (
        <>
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
                        <li>
                            <Button
                                href="https://www.instagram.com/yael.camps/"
                                titulo="Instagram"
                                icon={Instagran}
                            />
                        </li>
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
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={toggleModal}>&times;</span>
                                {submitted ? (
                                    <p>¡Formulario enviado!</p>
                                ) : (
                                    <>
                                        <h2>Contáctame</h2>
                                        <form id="form" onSubmit={handleSubmit}>
                                            <div
                                                className="conteneiner-nombre_mail"
                                            >
                                                <div
                                                    className="conteneiner-nombre"
                                                >
                                                    <label htmlFor="nombre">Nombre</label>
                                                    <input type="nombre" id="nombre" name="nombre" required />
                                                </div>
                                                <div
                                                    className="conteneiner_mail"
                                                >
                                                    <label htmlFor="email">Correo Electronico</label>
                                                    <input type="email" id="email" name="email" required />
                                                </div>
                                            </div>

                                            <div>
                                            </div>
                                            <div 
                                                className="conteinder_asunto">
                                                <label htmlFor="asunto">Asunto</label>
                                                <input type="asunto" id="asunto" name="asunto" required />
                                                <label htmlFor="mensaje">Enviar un mensaje</label>
                                                <textarea className="mensaje" type="mensaje" id="mensaje" name="mensaje" required />
                                            </div>
                                            <button className=""  type="submit">Enviar</button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default OnInternet;
