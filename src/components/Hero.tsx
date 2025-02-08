import React from 'react';
import { FaGithub, FaLinkedin, FaDocker } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-blue-400 rounded-full transform -rotate-6"></div>
              <img
                src="/my-img.jpeg"
                alt="Paresh Kumar Rout"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Paresh Kumar Rout</h1>
            <p className="text-xl mb-4">(He/Him)</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Aspiring DevOps Engineer</h2>
            <div className="max-w-2xl mb-8">
              <p className="text-xl mb-4">
                🚀 Cloud Computing & Automation Enthusiast | 🛠️ Docker, Kubernetes, AWS Expert
              </p>
              <p className="text-lg mb-4">
                🔄 CI/CD Expert | Cloud Engineer | DevSecOps
              </p>
              <p className="text-lg">
                💡 Building Scalable, Efficient Systems with a passion for automation and cloud technologies.
              </p>
            </div>
            <div className="flex space-x-6 mt-6 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-3xl hover:text-gray-300 transition-colors transform hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-3xl hover:text-gray-300 transition-colors transform hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer" 
                className="text-3xl hover:text-gray-300 transition-colors transform hover:scale-110">
                <FaDocker />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
