import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-vis-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="product" className="pt-12">
            <FeatureSection 
            title="Built for the Indian Wardrobe. Finally."
            description="3DVis is built for Indian fashion — not adapted to it. Most 3D fashion tools break the moment they touch a Kanjeevaram saree or a flowing Anarkali."
            ctaText="Explore Features"
            imageSrc="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop"
            imageAlt="Complex Indian Saree Drape"
            imageOnRight={true}
            />

            <FeatureSection 
            title="Template-Free Draping Engine"
            description="Indian garments don’t follow rigid patterns. 3DVis reconstructs loose, unstitched, and complex drapes like sarees, dupattas, and dhotis without forcing them into fixed templates."
            ctaText="See Technology"
            imageSrc="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=600&auto=format&fit=crop"
            imageAlt="Digital Drape Technology"
            imageOnRight={false}
            />

            <FeatureSection 
            title="SHARP++ Texture Fidelity"
            description="Flat visuals don’t sell fashion. Our texture engine captures the height of embroidery, the sheen of silk, and the grain of khadi. So your customers don’t just see the garment—they trust it."
            ctaText="View Texture Samples"
            imageSrc="https://images.unsplash.com/photo-1583391733958-e026857f70b2?q=80&w=1200&auto=format&fit=crop"
            imageAlt="High Fidelity Texture"
            imageOnRight={true}
            isWideImage={true}
            />

             <FeatureSection 
            title="WordRobe Variant Editor"
            description="Don’t reshoot. Just rewrite. Instantly create new colorways and print variations using simple text commands. Turn one design into multiple merchandising options."
            ctaText="Try Editor"
            imageSrc="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=600&auto=format&fit=crop"
            imageAlt="Color Variants"
            imageOnRight={false}
            />
        </div>

        <Solutions />
        
        <HowItWorks />

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;