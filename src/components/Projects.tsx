import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure deployment using Terraform and Ansible',
      tags: ['AWS', 'Terraform', 'Ansible', 'IaC'],
      image: '/project1-arch.png',
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Microservices CI/CD Pipeline',
      description: 'Implemented CI/CD pipeline for microservices using Jenkins and Kubernetes',
      tags: ['Jenkins', 'Kubernetes', 'Docker', 'GitOps'],
      image: '/project2-arch.png',
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Monitoring Solution',
      description: 'Set up comprehensive monitoring using Prometheus and Grafana',
      tags: ['Prometheus', 'Grafana', 'Monitoring', 'Alerting'],
      image: '/project3-arch.png',
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
