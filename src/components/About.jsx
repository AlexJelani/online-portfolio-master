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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Atque dolore nostrum nihil dicta vel earum doloribus obcaecati at 
               numquam delectus.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Atque dolore nostrum nihil dicta vel earum doloribus obcaecati at 
               numquam delectus.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Atque dolore nostrum nihil dicta vel earum doloribus obcaecati at 
               numquam delectus.
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