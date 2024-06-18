import { useEffect } from "react";
import { gsap } from "gsap";

const Card = ({ href, src, titulo, texto }) => {
    useEffect(() => {
        gsap.set(".cover", { yPercent: 0 });

        gsap.utils.toArray(".container").forEach((container) => {
            let cover = container.querySelector(".cover"),
                tl = gsap.timeline({ paused: true });

            tl.to(cover, { yPercent: -100 });

            container.addEventListener("mouseenter", () => tl.timeScale(1).play());
            container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
        });
    }, []);

    return (
        <div className="container">
            <div className="information">
                <a className='tarjetita' href={href} target="_blank">
                    <h3>{titulo}</h3>
                    <p>{texto}</p>
                </a>
            </div>
            <div className="cover">
                <img className='img-card' src={src} alt="Imagen del proyecto" />
            </div>
        </div>
    );
};




const CardCustomized = ({ href, src, titulo, texto }) => {
    useEffect(() => {
        gsap.set(".cover", { yPercent: 0 });

        gsap.utils.toArray(".container").forEach((container) => {
            let cover = container.querySelector(".cover"),
                tl = gsap.timeline({ paused: true });

            tl.to(cover, { yPercent: -100 });

            container.addEventListener("mouseenter", () => tl.timeScale(1).play());
            container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="information">
                    <a className='tarjetita' href={href} target="_blank">
                        <h3>{titulo}</h3>
                        <p>{texto}</p>
                    </a>
                </div>
                <div class="cover">
                    <img className='img-prototipo' src={src} alt="Imagen del proyecto" />
                </div>
            </div>
        </>
    );
};




export { Card, CardCustomized };
