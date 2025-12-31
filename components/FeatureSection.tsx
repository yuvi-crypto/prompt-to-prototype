import React from 'react';
import { FeatureSectionProps } from '../types';
import Button from './Button';

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  ctaText,
  imageSrc,
  imageAlt,
  imageOnRight = true,
  isWideImage = false
}) => {
  return (
    <section className="py-20 md:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex flex-col ${imageOnRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 uppercase tracking-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <Button variant="primary">
              {ctaText}
            </Button>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className={`relative ${isWideImage ? 'w-full aspect-[16/9]' : 'w-2/3 aspect-[3/4]'} transition-transform duration-500 hover:scale-[1.02]`}>
               {/* Using a placeholder image or a div if generic */}
               <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-full object-contain object-center"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;