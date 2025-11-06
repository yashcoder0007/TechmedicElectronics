import { Users, Target, Award, Lightbulb, ArrowLeft } from "lucide-react";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <Header />

             <section id="about" className="relative pt-20 pb-24 bg-gradient-to-b from-background to-muted/50">
         {/* Back Arrow Button */}
         <div className="absolute top-4 left-4 z-10">
           <Button
             variant="ghost"
             size="sm"
             onClick={() => navigate(-1)}
                                                       className="h-10 w-10 p-0 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-200"
           >
             <ArrowLeft size={20} />
           </Button>
         </div>
        {/* Decorative background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>

        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-tech-gray mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-tech-blue via-tech-accent to-tech-orange bg-clip-text text-transparent animate-gradient">
                TechMedic Electronics
              </span>
            </h2>
            <p className="text-lg md:text-xl text-tech-gray-light max-w-3xl mx-auto leading-relaxed">
              We are a leading provider of custom PCB manufacturing services and premium electronic components,
              dedicated to bringing your innovative ideas to life with precision engineering.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Target aria-hidden="true" className="text-white" size={28} />,
                title: "Our Mission",
                desc: "To provide innovative electronic solutions that empower businesses and individuals to achieve their technological goals.",
                gradient: "from-tech-blue to-tech-accent",
              },
              {
                icon: <Award aria-hidden="true" className="text-white" size={28} />,
                title: "Excellence",
                desc: "We maintain the highest standards in PCB manufacturing and component quality, ensuring reliable performance for every project.",
                gradient: "from-tech-accent to-tech-orange",
              },
              {
                icon: <Lightbulb aria-hidden="true" className="text-white" size={28} />,
                title: "Innovation",
                desc: "We stay at the forefront of technology, continuously updating our processes and component inventory.",
                gradient: "from-tech-blue to-tech-orange",
              },
              {
                icon: <Users aria-hidden="true" className="text-white" size={28} />,
                title: "Partnership",
                desc: "We work closely with our clients as trusted partners, providing personalized support and expertise.",
                gradient: "from-tech-accent to-tech-blue",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mt-8 shadow-md group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-tech-gray mb-3 group-hover:text-tech-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-tech-gray-light">{item.desc}</p>
                </div>
                {/* bottom accent bar */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
                ></div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-24 bg-gradient-to-r from-tech-blue/10 via-tech-accent/10 to-tech-orange/10 rounded-3xl p-10 md:p-16 shadow-xl backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-tech-gray mb-12">
                Why Choose <span className="text-tech-blue">TechMedic</span>?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    title: "Expert Team",
                    desc: "Our experienced engineers and technicians bring years of expertise to every project.",
                    color: "text-tech-blue",
                  },
                  {
                    title: "Quality Components",
                    desc: "We source only the highest quality electronic components from trusted manufacturers.",
                    color: "text-tech-accent",
                  },
                  {
                    title: "Fast Delivery",
                    desc: "Quick turnaround times without compromising on quality or precision.",
                    color: "text-tech-orange",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-background border border-border shadow hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                  >
                    <h4 className={`text-lg font-semibold ${item.color} mb-3`}>{item.title}</h4>
                    <p className="text-tech-gray-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
       <Footer />
       </div>
    </>
  );
};

export default About;
