import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import SpaceBackground from '../components/SpaceBackground';
import { projectsList } from '../data/projects';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsList);

  const tags = ["All", ...new Set(projectsList.flatMap(project => project.tags))];

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredProjects(projectsList);
    } else {
      setFilteredProjects(projectsList.filter(project => 
        project.tags.includes(selectedTag)
      ));
    }
  }, [selectedTag]);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <SpaceBackground />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Projects</h1>
        
        {/* Project Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                selectedTag === tag
                ? 'bg-blue-900 border-blue-900 text-white'
                : 'bg-transparent border-white/20 text-white hover:border-blue-500 hover:text-blue-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-blue-900/20 text-blue-400 border border-blue-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <p className="text-white text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <Link
                    to={`/projects/${index}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-400 font-medium hover:bg-blue-900/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;