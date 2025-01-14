import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import SpaceBackground from '../components/SpaceBackground';
import { projectsList } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsList[Number(id)];

  if (!project) {
    return (
      <div className="relative min-h-screen">
        <SpaceBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-white">Project not found</h1>
            <Link 
              to="/projects" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <SpaceBackground />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20 pb-12">
        <Link 
          to="/projects"
          className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-blue-900/20 text-blue-400 border border-blue-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white mb-8 text-lg">{project.description}</p>
            
            {project.detailedDescription && (
              <div className="space-y-4 mb-8">
                {project.detailedDescription.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-2 text-white">
                    <span className="text-blue-500 mt-1.5">•</span>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-900 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;