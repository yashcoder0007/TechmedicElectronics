import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, ArrowLeft } from "lucide-react";
import pcbDesignImage from "@/assets/pcb-design.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PCBManufacture = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section 
        id="services" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-tech-blue/10 relative overflow-hidden"
      >
        {/* Background blur creative effects */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-tech-accent/20 rounded-full blur-3xl animate-pulse"></div>

                 {/* Back Arrow Button */}
         <div className="absolute top-2 left-4 z-50">
           <Button 
             variant="ghost" 
             size="sm"
             onClick={() => navigate(-1)}
             className="h-10 w-10 p-0 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-200"
           >
             <ArrowLeft size={20} />
           </Button>
         </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-tech-gray drop-shadow-md">
           Single Layer PCB 
          </h2>
          <div className="w-24 h-1 bg-tech-blue mt-3 mb-6 rounded-full animate-pulse"></div>
          <p className="text-lg md:text-xl text-tech-gray-light max-w-2xl mb-12">
            Where imagination meets engineering — crafting PCBs that <span className="text-tech-blue font-semibold">elevate</span> your ideas with precision, <span className="text-tech-accent font-semibold">reliability</span>, and impact 🚀
          </p>

          {/* Card */}
          <Card className="group backdrop-blur-xl bg-white/70 hover:bg-white/90 border border-tech-blue/30 shadow-xl transition-all duration-500 rounded-2xl max-w-lg">
            <CardHeader className="pb-4">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={pcbDesignImage} 
                  alt="PCB Design Services"
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-tech-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Custom Manufacturing
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Cpu className="text-tech-blue animate-pulse" size={26} />
                <CardTitle className="text-2xl md:text-2xl text-tech-gray font-semibold">
                Single Layer PCB Manufacturing Service
                </CardTitle>
              </div>
              <CardDescription className="text-tech-gray-light text-base">
                Professional PCB manufacturing and prototyping services tailored for your needs. 
                Get expertly crafted circuit boards delivered with speed and precision.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Custom PCB layout & routing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Single-layer PCB manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Rapid prototyping turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">High‑quality FR‑4 material options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Professional solder mask & silkscreen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                  <span className="text-tech-gray">Quality testing & inspection</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-tech-blue to-tech-accent hover:from-tech-accent hover:to-tech-blue text-white font-semibold py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdLX2OkEA1WoSuhUQogw0b3e60Z-V2PfymvsgpPicRSIH6tWw/viewform?usp=header",
                  "_blank"
                )}
              >
                Submit PCB Manufacturing Request <ArrowRight className="ml-2" size={18} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default PCBManufacture;
