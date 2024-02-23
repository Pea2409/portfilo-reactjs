import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appending and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS and Javascript.
      </span>
      <div className="skillBarList">
        <div className="skillBarItem">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              This is a demo text, you can be changed while making the
              production ready website
            </p>
          </div>
        </div>
        <div className="skillBarItem">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              This is a demo text, you can be changed while making the
              production ready website
            </p>
          </div>
        </div>
        <div className="skillBarItem">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              This is a demo text, you can be changed while making the
              production ready website
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
