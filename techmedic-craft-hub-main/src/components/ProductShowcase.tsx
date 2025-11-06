import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";
import pcbDesignImage from "@/assets/pcb-design.jpg";

const ProductShowcase = () => {

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-tech-gray-light max-w-3xl mx-auto">
            Professional electronics solutions tailored to your needs. From custom PCB Manufacturing to premium components supply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PCB Design Service */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-tech-blue/50 bg-gradient-to-br from-white to-secondary/50 h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={pcbDesignImage} 
                  alt="PCB Design Services"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Custom Manufacturing
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Cpu className="text-tech-blue" size={24} />
                <CardTitle className="text-2xl text-tech-gray">Single Layer PCB Manufacturing</CardTitle>
              </div>
              <CardDescription className="text-tech-gray-light text-base">
                Professional PCB manufacturing and prototyping services. Send us your specifications and get expertly crafted circuit boards.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Custom PCB Layout & Routing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Single layer PCB manuacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Clear Print & Quality PCB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Fast home delivery</span>
                </div>
              </div>
              <Button 
                className="w-full bg-tech-blue hover:bg-tech-blue-dark text-white mt-auto"
                onClick={() => window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdLX2OkEA1WoSuhUQogw0b3e60Z-V2PfymvsgpPicRSIH6tWw/viewform?usp=header",
                  "_blank"
                )}
              >
                Submit PCB Manufacturing Request <ArrowRight className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>

          {/* Double Layer PCB Manufacturing (duplicate of the first card) */}
          <Card id="double-layer" className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-tech-blue/50 bg-gradient-to-br from-white to-secondary/50 h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={pcbDesignImage} 
                  alt="PCB Design Services"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Custom Manufacturing
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Cpu className="text-tech-blue" size={24} />
                <CardTitle className="text-2xl text-tech-gray">Double Layer PCB Manufacturing</CardTitle>
              </div>
              <CardDescription className="text-tech-gray-light text-base">
                Professional PCB manufacturing and prototyping services. Send us your specifications and get expertly crafted circuit boards.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Custom PCB Layout & Routing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Double layer PCB manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Clear Print & Quality PCB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Fast home delivery</span>
                </div>
              </div>
              <Button 
                className="w-full bg-tech-blue hover:bg-tech-blue-dark text-white mt-auto"
                onClick={() => window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScbj2Q0_4fOb5o_Y8G_Yt1N-EBMvx3eYChN_GqIe3aFXWN86Q/viewform?usp=header",
                  "_blank"
                )}
              >
                Submit PCB Manufacturing Request <ArrowRight className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
