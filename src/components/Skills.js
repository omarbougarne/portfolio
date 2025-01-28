import React from "react";
import './Skills.css';

export default function Skills() {
  const skills = [
    "MERN stack",
    "Next.js",
    "NestJS",
    "React Native",
    "PHP/Laravel",
    "MySQL",
    "PostgreSQL",
    "CI/CD",
    "GitHub Actions",
    "Agile",
    "Scrum/Kanban"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font gradient-text mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="skill-card">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {/* Add your certifications here */}
          </p>
        </div>
      </div>
    </section>
  );
}