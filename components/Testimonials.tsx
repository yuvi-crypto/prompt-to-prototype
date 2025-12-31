import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import Button from './Button';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    company: "The Fast-Moving Export Brand",
    quote: "We were maintaining permanent model setups because collections changed so frequently. 3DVis helped us validate designs digitally—with texture accuracy other tools couldn’t match.",
    author: "Head of Design",
    role: "Export House, Jaipur",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    company: "The Custom Bridal Boutique",
    quote: "Clients used to reject finished pieces because the final look didn’t match their expectation. Now we get approval digitally before stitching. Sample waste dropped dramatically.",
    author: "Founder",
    role: "Bridal Studio, Delhi",
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    company: "The Design Student",
    quote: "Traditional 3D tools were too complex. 3DVis let me visualize ideas instantly and focus on design, not software.",
    author: "Senior Student",
    role: "NIFT",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="stories" className="py-24 bg-vis-dark text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-16 text-white">
          Real Problems. Real Outcomes.
        </h2>

        <div className="relative bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <Quote className="absolute top-8 left-8 text-white/10 h-16 w-16 -z-10" />
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-vis-primary flex-shrink-0">
               <img src={TESTIMONIALS[activeIndex].imageSrc} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="text-left flex-1">
              <p className="text-xl md:text-2xl leading-relaxed font-serif italic mb-6 text-gray-100">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>
              <div>
                <h4 className="font-bold text-vis-primary">{TESTIMONIALS[activeIndex].company}</h4>
                <p className="text-sm text-gray-400">{TESTIMONIALS[activeIndex].author}, {TESTIMONIALS[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
             <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
               <ChevronLeft size={20} />
             </button>
             <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
               <ChevronRight size={20} />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;