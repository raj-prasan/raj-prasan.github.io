import React from "react";
import {Briefcase, Code, User} from 'lucide-react'
function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className=" text-2xl font-semibold">Passionate Web Devloper</h3>

            <p className="text-muted-foreground ">
              I am constantly improving my skills, exploring new tools, and
              staying updated with the latest web development practices. With
              strong problem-solving abilities and attention to detail, I enjoy
              turning ideas into real projects that make an impact.
            </p>
            <p className="text-muted-foreground ">
              Beyond coding, I value learning, creativity, and collaboration —
              qualities that help me adapt quickly and contribute effectively to
              any project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-primary">Web Devlopment</h4>
                  <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-primary">Frontend & UI/UX</h4>
                  <p className="text-muted-foreground">Designing clean, user-friendly interfaces and ensuring seamless user experiences with React and Tailwind CSS.</p>
                </div>
                
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-primary">Backend & Databases</h4>
                  <p className="text-muted-foreground">Developing robust server-side logic and managing data efficiently with Node.js, Express, and MySQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
