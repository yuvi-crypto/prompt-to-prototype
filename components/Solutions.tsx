import React from 'react';
import { Camera, Zap, Users, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: <Camera size={32} className="text-vis-primary" />,
    title: "Fast-Fashion Brands",
    subtitle: "Virtual Photoshoots",
    problem: "Launching new collections every 10–15 days means constant photoshoots, rising costs, and slower go-to-market.",
    solution: "Shoot once. Digitally drape hundreds of SKUs. Reduce content costs by up to 60% and get your catalog live weeks earlier.",
  },
  {
    icon: <Users size={32} className="text-vis-primary" />,
    title: "Custom Boutiques",
    subtitle: "The Trust Bridge",
    problem: "Clients reject finished pieces because \"the color looked different\" or \"the embroidery didn’t feel right.\"",
    solution: "Show clients the exact drape, color, and embroidery depth on a digital avatar before cutting fabric. Get approval on the visual.",
  },
  {
    icon: <Zap size={32} className="text-vis-primary" />,
    title: "Merchandisers",
    subtitle: "Local Faces That Convert",
    problem: "Generic stock models don’t look like Indian customers. They reduce trust and conversions.",
    solution: "Access a curated library of Indian avatars—real body types, diverse skin tones, culturally familiar silhouettes.",
  },
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-vis-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-vis-primary uppercase tracking-widest mb-3">Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-vis-dark mb-6">
            Solve the Business Problem,<br /> Not Just the Image
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="bg-red-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h4 className="text-xl font-bold text-vis-dark mb-1">{item.title}</h4>
              <p className="text-sm font-semibold text-vis-primary mb-6">{item.subtitle}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">The Problem</span>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">The Solution</span>
                  <p className="text-sm text-gray-800 mt-1 font-medium leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-sm font-bold text-vis-primary hover:text-vis-primaryDark group">
                Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;