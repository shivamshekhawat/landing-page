import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-4">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-4">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
