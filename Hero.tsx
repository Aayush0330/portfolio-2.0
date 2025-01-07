import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">John Doe</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <a href="#projects"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </div>
  );
}