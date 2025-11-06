import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="text-tech-blue" size={24} />
            <span className="text-tech-blue font-semibold">Professional Electronics Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-tech-gray mb-6 leading-tight">
            TechMedic
            <span className="bg-gradient-to-r from-tech-blue to-tech-accent bg-clip-text text-transparent">
              {" "}Electronics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-tech-gray-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Innovation Etched in Every Circuit—Your PCB Experts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a href="#services"><Button size="lg" className="bg-tech-blue hover:bg-tech-blue-dark text-white px-8 py-4 text-lg">
              Get Started <ArrowRight className="ml-2" size={20} />
            </Button></a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-tech-blue" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-tech-gray">99.9%</h3>
              <p className="text-tech-gray-light">Quality Assurance</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="text-tech-orange" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-tech-gray">24/7</h3>
              <p className="text-tech-gray-light">Technical Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;