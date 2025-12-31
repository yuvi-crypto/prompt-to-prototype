import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-vis-dark mb-6">
            No CAD Skills. No Studios.<br /> No Complexity.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We replaced the complex engineering of CAD with a simple 3-step workflow for merchandisers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-sm mb-8 text-2xl font-bold text-vis-primary">
              01
            </div>
            <h3 className="text-xl font-bold text-vis-dark mb-3">Capture</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Take a single photo of your garment—on a mannequin or flat lay. No scanners. No special setup required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-4 border-vis-primary rounded-full flex items-center justify-center shadow-lg mb-8 text-2xl font-bold text-vis-primary">
              02
            </div>
            <h3 className="text-xl font-bold text-vis-dark mb-3">Drape</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Select an Indian avatar. Our system predicts fabric fall based on material and weight, handling complex overlaps like dupattas.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-sm mb-8 text-2xl font-bold text-vis-primary">
              03
            </div>
            <h3 className="text-xl font-bold text-vis-dark mb-3">Export</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Generate high-resolution catalog images or 360° visuals. Ready for Shopify, Myntra, and Instagram instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;