import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';


const Skills = () => {
  useEffect(() => {
    // init controller
    const controller = new ScrollMagic.Controller();

    // build scenes
    const revealElements = document.getElementsByClassName("digit");
    for (let i = 0; i < revealElements.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle(revealElements[i], "visible")
        .addIndicators({ name: `digit ${i + 1}` })
        .addTo(controller);
    }

    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <div className='background_skills'>
      <div className="conteiner-card_skills">

          <div className="box1 digit blue">
            <div className="box">
              <p>HTML</p>
            </div>
          </div>

          <div className="box1 digit turqoise">
            <div className="box">
              <p>Javascript</p>
            </div>
          </div>

          <div className="box1 digit red">
            <div className="box">
              <p>React</p>
            </div>
          </div>

          <div className="box1 digit green">
            <div className="box">
              <p>Scss / Css</p>
            </div>
            </div>

            <div className="box1 digit orange">
              <div className="box">
                <p>Figma</p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Skills;