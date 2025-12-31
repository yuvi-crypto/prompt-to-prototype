import React from 'react';
import Button from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-left z-10 lg:pr-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-vis-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-vis-primary animate-pulse"></span>
            New: SHARP++ Texture Engine
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-vis-dark leading-[1.1] tracking-tight mb-6">
            Finally, AI That Actually Understands the <span className="text-vis-primary">Fall of a Saree.</span>
          </h1>
          
          <p className="text-lg text-vis-gray mb-8 max-w-xl leading-relaxed">
            Master the drape of heavy silk and the depth of intricate embroidery. Create showroom-quality catalog images for every SKU—instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
            <Button size="lg" className="shadow-lg hover:shadow-xl group">
              Start Your Free Pilot
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white">
              View Sample Catalog
            </Button>
          </div>

          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 font-medium">
             <div className="flex items-center gap-1.5">
               <CheckCircle2 size={16} className="text-vis-primary" /> No Studio Required
             </div>
             <div className="flex items-center gap-1.5">
               <CheckCircle2 size={16} className="text-vis-primary" /> No Credit Card Needed
             </div>
             <div className="flex items-center gap-1.5">
               <CheckCircle2 size={16} className="text-vis-primary" /> "Sample Ready" to Live in Hours
             </div>
          </div>
        </div>

        {/* Right Visual (Collage) */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
          {/* Main Hero Image - Saree Model */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-gray-200 rounded-xl overflow-hidden shadow-2xl z-10">
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop" 
              alt="Indian Model in Saree"
              className="w-full h-full object-cover"
            />
            {/* Overlay UI Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/50">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-xs font-bold text-gray-500 uppercase">Input</span>
                 <span className="text-xs font-bold text-vis-primary uppercase">Output</span>
               </div>
               <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                 <div className="h-full w-full bg-vis-primary"></div>
               </div>
               <p className="mt-2 text-xs text-gray-600">Generated in 4.2s • Silk Texture • Model: Aishwarya</p>
            </div>
          </div>

          {/* Floating Detail Image 1 */}
          <div className="absolute top-10 right-0 lg:-right-4 w-48 h-64 bg-white p-2 rounded-lg shadow-xl z-20 hidden sm:block animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <img 
              src="https://images.unsplash.com/photo-1583391733958-e026857f70b2?q=80&w=400&auto=format&fit=crop" 
              alt="Embroidery Detail"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute -bottom-3 -right-3 bg-vis-dark text-white text-xs px-2 py-1 rounded">SHARP++ Detail</div>
          </div>

          {/* Floating Detail Image 2 */}
          <div className="absolute bottom-20 left-0 lg:-left-8 w-40 h-40 bg-white p-2 rounded-lg shadow-xl z-20 hidden sm:block animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=400&auto=format&fit=crop" 
              alt="Fabric Texture"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute -bottom-3 -left-3 bg-white text-vis-dark border border-gray-200 text-xs px-2 py-1 rounded shadow-sm">Kanjeevaram Silk</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;