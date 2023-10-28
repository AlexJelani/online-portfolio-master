import React from "react";
import project1 from "../assets/mallbotfullscreen.png";
import project2 from "../assets/recipeaiimage.png";
import project3 from "../assets/greatdev.png";
import project4 from "../assets/friendtracker.png";

const Projects = () => {
  const projects = [
    {
      img: project1,
      title: "Mallbot - Fine-tuned AI Mall Assistant Bot",
      desc: " An AI bot for store location assistance and mall inquiries built JavaScript and the OpenAI API.  ",
      live: "https://ai-recipegenerator.web.app/",
      github: "https://github.com/AlexJelani/ai-recipe-generator",
    },
    {
      img: project2,
      title: "AI Recipe Generator",
      desc: " An AI recipe generator using OpenAI's DALL-E and Firebase, which generates recipes and accompanying images based on user input.",
      github: "https://github.com/AlexJelani/ai-recipe-generator",
    },
    {
      img: project3,
      title: "React-TypeScript Shopping Cart",
      desc: "A responsive e-commerce shopping cart app is built using React, TypeScript, and Firebase",
      live: "https://react-ts-shoppingcart.web.app/store ",
      github: "https://github.com/AlexJelani/react-ts-shopping-cart",
    },
    {
      img: project4,
      title: "Social Media Friend Tracker",
      desc: "Social Media Friend Tracker built with React, CSS, and custom API backend for CRUD operations.",
      live: "https://social-media-friend-tracker-ef052f.netlify.app/",
      github: "https://github.com/AlexJelani/Social-Media-Friend-Tracker",
    },
  ];
  return (
    <section className="bg-primary text-white py-32" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
          Projects
        </h2>
        <p className="pb-5">// Check out some of my recent work</p>
      </div>
      <div className="max-w-[1280px] grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 mx-auto justify-center">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{ backgroundImage: `url('${project.img}')` }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 show-on-mobile">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                  {project.desc}
                </p>
                <div className="flex justify-center">
                  <div className="inline-block">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                  <div className="inline-block">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
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