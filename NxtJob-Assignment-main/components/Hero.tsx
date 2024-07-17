import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-blue-500 text-white min-h-screen flex flex-col items-center justify-center text-center pt-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 animate-fadeInUp">NxtJob</h1>
        <p className="text-xl mb-8 animate-fadeInUp">Discover the Joy of Learning!</p>
        <a href="https://www.nxtjob.ai/" className="bg-white text-blue-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
