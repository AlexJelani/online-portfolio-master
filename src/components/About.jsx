import React from 'react'
import AboutImg from '../assets/about-img-two.jpg'

const About = () => {
    return (
        <section className="bg-secondary text-white py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info">
            <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
              About Me
            </h2>
            <p className="pb-5">
            Hello, my name is Jelani Alexander, and I’m a software developer. My goal is to create user-friendly apps by combining frontend and backend technologies. I specialize in React, JavaScript, and CSS 
            and I have recently developed a strong interest in OpenAI and Dall-E. I believe that continuous learning is essential in the tech industry, and I always strive to improve my skills. Apart from coding, 
            I enjoy exploring art, music, and Japanese culture, and I’m always eager to learn new things.
            </p>
          </div>
          <div className="hero-img">
            <img src={AboutImg} alt="coding illustration" className="lgw-[80%] md:ml-auto w-96 ml-auto rounded-full" />
          </div>
          </div>
        </section>
      );
}

export default About