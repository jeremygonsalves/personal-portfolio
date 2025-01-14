import React from 'react';
import SpaceBackground from '../components/SpaceBackground';
import TechStack from '../components/TechStack';
import DailyStoicQuote from '../components/DailyStoicQuote';
import { Mail, Github, Linkedin, FileText, Database, BarChart2, LineChart } from 'lucide-react';

const Home = () => {
  const skills = [
    { icon: <Database className="w-8 h-8" />, name: "Data Analysis", description: "Expert in SQL & Python" },
    { icon: <BarChart2 className="w-8 h-8" />, name: "Business Intelligence", description: "Dashboard Design" },
    { icon: <LineChart className="w-8 h-8" />, name: "Machine Learning", description: "Predictive Analytics" }
  ];

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      
      <div className="absolute inset-0 z-10">
        <div className="min-h-screen flex flex-col justify-center items-center px-4 text-white">
          <div className="max-w-4xl w-full text-center space-y-6 px-4">
            <div className="mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-900 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Jeremy Gonsalves"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Jeremy Gonsalves
              </h1>
              <h2 className="text-xl md:text-3xl text-blue-500">
                Data Analytics & Business Intelligence
              </h2>
            </div>
            
            <p className="text-lg md:text-2xl text-white">
              Bilingual Data Analyst | Python Expert | SQL Specialist
            </p>

            <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 mt-12">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-lg w-full md:w-64 transform hover:scale-105 transition-transform duration-300 border border-blue-900/30"
                >
                  <div className="flex justify-center mb-4 text-blue-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                  <p className="text-white">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center space-x-6">
              <a 
                href="mailto:jeremygonsalves98@outlook.com" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Send Email
                </span>
              </a>
              <a 
                href="https://github.com/jeremygonsalves" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <Github className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View GitHub
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jeremy-gonsalves/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View LinkedIn
                </span>
              </a>
              <a 
                href="https://drive.google.com/file/d/1LpvAb1La2BRrClkb7Kq45kn0qBshsUni/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <FileText className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        <TechStack />

        {/* About Me Section */}
        <div className="py-16 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">About Me</h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-white">
                Bilingual (French and English) data analyst with over 1 year of experience in data-driven roles focused on analytics, process optimization, and scalable data solutions. Skilled in SQL, Python, and A/B testing methodologies to inform decisions and drive user engagement, growth, and profitability. Experienced in designing intuitive dashboards, developing analytics workflows, and fostering data-driven organizational cultures. Adept at addressing ambiguous problems, formulating actionable hypotheses, and collaborating cross-functionally with technical and non-technical teams. Eager to work in dynamic environments, combining creativity, critical thinking, and a passion for redefining the financial industry with customer-focused solutions.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-white">
                As an outgoing individual, I thrive in client-facing environments, where I can apply my technical skills to solve complex problems while building strong relationships. Im extremely passionate about contributing to innovative projects in industries like financial services, sports, technology, and e-commerce.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-center text-white mb-4">Skills & Interests</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  <li className="text-white">
                    <span className="font-medium">Professional Skills:</span> Continuous Learner and Problem Solver, Teaching and Training Skills, Entrepreneurial Mindset, Analytical Thinker, Presentation Preparation, Data Visualization, Financial Modelling, Interpersonal Skills, and Leadership.
                  </li>
                  <li className="text-white">
                    <span className="font-medium">Personal Interests:</span> Triathlete focusing on Fitness and Wellness, Language Learner (Spanish, Dutch, Italian).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <DailyStoicQuote />
      </div>
    </div>
  );
};

export default Home;