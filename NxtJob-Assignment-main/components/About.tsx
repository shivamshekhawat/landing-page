import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">About</h2>
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
          <p className="text-lg text-gray-600">Ahead App is a concept redesign focused on improving user experience and visual aesthetics. The app aims to provide seamless interaction and efficient task management for users.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
