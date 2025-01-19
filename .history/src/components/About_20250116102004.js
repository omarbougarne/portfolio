import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="about-title mb-8">
            Hi, I'm Omar.
            <br className="hidden lg:inline-block" />
            I build amazing apps.
          </h1>
          <div className="text-container mb-8">
            <p className="leading-relaxed text-lg">
              A passionate Full-Stack Developer specializing in
              <span className="tech-pill">PHP</span>
              <span className="tech-pill">Laravel</span>
              and mastering
              <span className="tech-pill">MERN</span>
              <span className="tech-pill">NestJS</span>
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">TypeScript</span>
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="cta-button">
              Work With Me
            </a>
            <a href="#projects" className="cta-button">
              View Projects
            </a>
          </div>
        </div>
        <div className="about-image lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
      <div className="scroll-indicator" />
    </section>
  );
}