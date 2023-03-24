import React from "react";

//import skills data
import {skills} from "../data";

const Skills = () => {
  return (
    <section className=" bg-primary py-12" >
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Skills;
