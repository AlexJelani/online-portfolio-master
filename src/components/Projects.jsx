import React from "react";
import project1 from "../assets/portfoliosite.png";
import project2 from "../assets/friendtracker.png";
import project3 from "../assets/reactdictionary.png";
import project4 from "../assets/greatdev.png";

const Projects = () => {
  const projects = [
    {
      img: project1,
      title: "My Portfolio",
      desc: " A portfolio website built with React and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      github: "https://github.com/Coderamrin/devlog",
    },
    {
      img: project2,
      title: "Social Media Friend Tracker",
      desc: "Social Media Friend Tracker built with React, CSS, and custom API backend for CRUD operations.",
      live: "https://social-media-friend-tracker-ef052f.netlify.app/",
      github: "https://github.com/AlexJelani/Social-Media-Friend-Tracker",
    },
    {
      img: project3,
      title: "A React Dictionary",
      desc: " A Full-Stack React Dictionary app with an Express backend, Tailwind UI,and data from two APIs.",
      live: "https://react-picture-dictionary-app.web.app/",
      github: "https://github.com/AlexJelani/React-dictionary-picture-app",
    },
    {
      img: project4,
      title: "React-TypeScript Shopping Cart",
      desc: "A responsive e-commerce shopping cart app is built using React and TypeScript",
      live: "https://react-ts-shoppingcart.web.app/store ",
      github: "https://github.com/AlexJelani/react-ts-shopping-cart",
    },
  ];
  return (
    <section className="bg-primary text-white py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            //Check out some of my recent work
          </p>
        </div>
      </div>
      <div className="max-w-[1536px] grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 mx-auto">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group "
              style={{ backgroundImage: `url('${project.img}')` }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 show-on-mobile">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                  {project.desc}
                </p>
                <div className="flex justify-center">
                  <div className="inline-block">
                    <a href={project.github} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                  <div className="inline-block">
                    <a href={project.live} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
