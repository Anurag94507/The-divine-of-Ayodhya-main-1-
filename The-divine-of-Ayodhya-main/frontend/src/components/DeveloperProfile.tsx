import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const DeveloperProfile = () => {
  return (
    <div className="bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center">Developer</h2>
      <div className="flex flex-col items-center space-y-6 mb-6">
        <img
          src="/images/developer-kartik.jpg"
          alt="Kartikey"
          className="w-48 h-48 rounded-lg border-4 border-ayodhya-saffron shadow-xl object-cover"
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-ayodhya-maroon">Kartikey</h3>
          <p className="text-gray-600 text-lg">Full Stack Developer</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/KeyToCoding"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-700 hover:text-ayodhya-saffron transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <Github className="w-6 h-6" />
          <span className="text-lg">GitHub: @KeyToCoding</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kartikey28/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-700 hover:text-ayodhya-saffron transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <Linkedin className="w-6 h-6" />
          <span className="text-lg">LinkedIn: kartikey28</span>
        </a>
      </div>
    </div>
  );
};

export default DeveloperProfile;
