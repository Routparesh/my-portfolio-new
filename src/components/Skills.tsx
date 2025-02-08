import React from 'react';
import { FaAws, FaDocker, FaGitAlt, FaJenkins} from 'react-icons/fa';
import { SiTerraform, SiAnsible, SiGrafana } from 'react-icons/si';

const Skills: React.FC = () => {
  const skills = [
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: FaDocker },
    { name: 'Jenkins', icon: FaJenkins },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Terraform', icon: SiTerraform },
    { name: 'Ansible', icon: SiAnsible },
    { name: 'Grafana', icon: SiGrafana },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <skill.icon className="text-4xl mb-2 text-blue-600" />
              <span className="text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
