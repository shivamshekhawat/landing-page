import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">NxtJob</h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">Features</a>
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
            <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
