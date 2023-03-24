import React from "react";

//import skills data
import {skills} from "../data";

const Skills = () => {
  return (
    <section className=" bg-secondary py-12" >
      <container className="mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div>
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </container>
    </section>
  );
};

export default Skills;
