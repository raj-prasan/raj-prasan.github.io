import React from 'react'
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Tenzies: Mini Game",
    description: "A simple and fun dice game built with React and Vite.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript"],
    demoUrl: "https://tenzies-pi-sand.vercel.app/",
    gitHubUrl: "https://github.com/raj-prasan/tenzies"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern and responsive portfolio built with React and Tailwind.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "Vite"],
    demoUrl: "https://raj-prasan.vercel.app/",
    gitHubUrl: "https://github.com/raj-prasan/raj-prasan.github.io"
  }
]

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in frontend development.
        </p>

        {/* Grid of projects */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-50% object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
