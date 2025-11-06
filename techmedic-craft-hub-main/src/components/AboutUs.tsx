import { Users, Target, Award, Lightbulb } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            Glance Of <span className="bg-gradient-to-r from-tech-blue to-tech-accent bg-clip-text text-transparent">TechMedic Electronics</span>
          </h2>
          <p className="text-xl text-tech-gray-light max-w-3xl mx-auto">
          With just a glance, our dedication to precision engineering and premium electronics shines through, offering a creative and tempting path for your ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-tech-gray mb-3">🌍 Who We Are</h3>
            <p className="text-tech-gray-light">
            We are a leading provider of custom PCB manufacturing and premium electronic components, turning bold ideas into reality through precision, innovation, and trust.
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-tech-accent to-tech-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-tech-gray mb-3">🎯 What Drives Us</h3>
            <p className="text-tech-gray-light">
            Our goal is simple — to empower businesses, startups, and innovators with reliable, high-performance electronic solutions that accelerate their journey from concept to success.
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-tech-orange to-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-tech-gray mb-3">⚡ Why Choose Us</h3>
            <p className="text-tech-gray-light">
            With world-class engineering standards, advanced technology, and a customer-first approach, we deliver not just products, but confidence and long-term value.
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-tech-gray mb-3">🤝 Together, We Build</h3>
            <p className="text-tech-gray-light">
            We don’t just serve clients — we build partnerships. By working side by side, we ensure personalized support, expert insights, and solutions that truly fit your vision.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-tech-blue/10 to-tech-accent/10 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-tech-gray mb-6">Why Choose TechMedic Electronics?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-tech-blue mb-3">Expert Team</h4>
                <p className="text-tech-gray-light">
                  Our experienced engineers and technicians bring years of expertise to every project.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-tech-accent mb-3">Quality Components</h4>
                <p className="text-tech-gray-light">
                  We source only the highest quality electronic components from trusted manufacturers.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-tech-orange mb-3">Fast Delivery</h4>
                <p className="text-tech-gray-light">
                  Quick turnaround times without compromising on quality or precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;