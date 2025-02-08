import React from 'react';
import { FaServer, FaCloud, FaLock, FaCode, FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiAnsible, SiTerraform } from 'react-icons/si';

const About: React.FC = () => {
  const achievements = [
    {
      title: "Deployment Optimization",
      description: "Implemented various DevOps tools and processes, achieving a 40% reduction in deployment time and significantly improving system reliability and scalability.",
      icon: SiJenkins
    },
    {
      title: "Cost Optimization",
      description: "Reduced the monthly price for AWS ECR and EKS by 50% through efficient resource management and optimization.",
      icon: FaAws
    },
    {
      title: "Performance Improvement",
      description: "Optimized Artifact Registry image pulling strategy, resulting in a 30% decrease in release cycle times and server resource usage.",
      icon: FaDocker
    },
    {
      title: "CI/CD Implementation",
      description: "Established comprehensive CI/CD pipelines for Angular, React, NodeJs, and Python services.",
      icon: SiKubernetes
    }
  ];

  const tools = [
    { name: "Kubernetes & Helm", icon: SiKubernetes },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Docker", icon: FaDocker },
    { name: "Ansible", icon: SiAnsible },
    { name: "AWS & Terraform", icon: SiTerraform },
    { name: "Infrastructure as Code", icon: FaCode }
  ];

  return (
    <section id="about-me" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DevOps Engineer specializing in implementing efficient CI/CD pipelines, cloud infrastructure,
            and automation solutions that drive business value and technical excellence.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-500 mb-4">
                <achievement.icon className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Stack & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <tool.icon className="text-3xl text-blue-500 mb-2" />
                <span className="text-gray-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience Highlights</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-3">CI/CD Pipeline Implementation</h4>
              <p className="text-gray-600 mb-4">
                Planned, implemented, and documented comprehensive CI/CD pipelines for various technology stacks including:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 ml-6">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Angular Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>React Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>NodeJs Services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Python Services</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-3">Database & Infrastructure Management</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-2">Database Technologies:</p>
                  <ul className="ml-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>MySQL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Redis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>MongoDB</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Scripting & Automation:</p>
                  <ul className="ml-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Python Scripting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Bash Scripting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>AWS Services with Terraform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
