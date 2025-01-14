import React from 'react';

const techStack = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  },
  {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Power BI',
    icon: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg'
  },
  {
    name: 'Excel',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Three.js',
    icon: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png'
  }
];

const TechStack = () => {
  return (
    <div className="py-16 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
        <div className="brandsCarousel">
          <div className="carouselTrack flex">
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="brandLogo flex items-center justify-center mx-4">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-12 h-12 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;