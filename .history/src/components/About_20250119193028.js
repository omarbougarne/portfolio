import React from "react";
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Omar.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            A passionate Full-Stack Developer with experience in building scalable web applications using PHP and Laravel. Currently, I am mastering the MERN stack while diving deep into modern frameworks like NestJS, Next.js, and TypeScript. With a focus on creating efficient and user-centric solutions, I enjoy learning and applying cutting-edge technologies to bring innovative ideas to life. Let’s build something amazing together!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="button work-button">
              Work With Me
            </a>
            <a
              href="#projects"
              className="button ml-4 see-work-button">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}