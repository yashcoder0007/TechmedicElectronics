import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
            <main className="pt-16 relative">
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

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tech-gray mb-4 md:mb-6">
                Contact <span className="bg-gradient-to-r from-tech-blue to-tech-accent bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-tech-gray-light max-w-3xl mx-auto px-4">
                Get in touch with our team of experts. We're here to help with your PCB design needs and electronic component requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form with Formspree */}
              <div className="bg-background border border-border rounded-2xl p-4 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-tech-gray mb-4 md:mb-6">Send us a Message</h2>
                <form 
                  action="https://formspree.io/f/xldwrnvn" 
                  method="POST"
                  className="space-y-4 md:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-tech-gray text-sm md:text-base">First Name</Label>
                      <Input id="firstName" name="firstName" type="text" className="mt-1 md:mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-tech-gray text-sm md:text-base">Last Name</Label>
                      <Input id="lastName" name="lastName" type="text" className="mt-1 md:mt-2" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-tech-gray text-sm md:text-base">Email Address</Label>
                    <Input id="email" name="email" type="email" className="mt-1 md:mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-tech-gray text-sm md:text-base">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" className="mt-1 md:mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-tech-gray text-sm md:text-base">Company (Optional)</Label>
                    <Input id="company" name="company" type="text" className="mt-1 md:mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-tech-gray text-sm md:text-base">Subject</Label>
                    <Input id="subject" name="subject" type="text" className="mt-1 md:mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-tech-gray text-sm md:text-base">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="mt-1 md:mt-2" 
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-blue hover:bg-tech-blue-dark text-white py-2 md:py-3 text-sm md:text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-gradient-to-r from-tech-blue/10 to-tech-accent/10 rounded-2xl p-4 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-tech-gray mb-4 md:mb-6">Get in Touch</h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-tech-gray text-sm md:text-base">Email Us</h3>
                        <p className="text-tech-gray-light text-sm md:text-base">engineers@techmedicelectronics.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-tech-gray text-sm md:text-base">Call Us</h3>
                        <p className="text-tech-gray-light text-sm md:text-base">+91 6398157016</p>
                        <p className="text-tech-gray-light text-sm md:text-base">+91 7579530412</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-orange rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-tech-gray text-sm md:text-base">Visit Us</h3>
                        <p className="text-tech-gray-light text-sm md:text-base">
                          Katghar Beech Holi Ka Maidan<br />
                          Moradabad, 244001<br/>
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-tech-blue to-tech-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-tech-gray text-sm md:text-base">Business Hours</h3>
                        <p className="text-tech-gray-light text-sm md:text-base">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-2xl p-4 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-tech-gray mb-3 md:mb-4">Quick Response</h3>
                  <p className="text-tech-gray-light text-sm md:text-base mb-3 md:mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent PCB design requests, 
                    please call us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 text-sm md:text-base py-2 md:py-3"
                      onClick={() => window.open('tel:+916398157016', '_blank')}
                    >
                      <Phone className="mr-2" size={16} />
                      Call Now
                    </Button>
                    <Button 
                      className="flex-1 bg-tech-blue hover:bg-tech-blue-dark text-sm md:text-base py-2 md:py-3"
                      onClick={() => window.open('mailto:engineers@techmedicelectronics.com', '_blank')}
                    >
                      <Mail className="mr-2" size={16} />
                      Email Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
