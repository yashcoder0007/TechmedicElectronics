import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-tech-gray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-tech-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TM</span>
              </div>
              <h3 className="text-xl font-bold">TechMedic Electronics</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Blueprints for Innovation—Crafting Exceptional PCBs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-tech-blue">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/pcbmanufacture" className="text-gray-300 hover:text-white transition-colors">Single Layer PCB</Link></li>
              <li><Link to="/double-layer-pcb" className="text-gray-300 hover:text-white transition-colors">Double Layer PCB</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-tech-blue">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-tech-accent mt-1" size={20} />
                <div>
                  <p className="text-gray-300">Katghar Beech Holi Ka Maidan</p>
                  <p className="text-gray-300">Moradabad, 244001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-tech-accent" size={20} />
                <p className="text-gray-300">+91 6398157016 , 7579530412</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-tech-accent" size={20} />
                <p className="text-gray-300">engineers@techmedicelectronics.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-tech-accent mt-1" size={20} />
                <div>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-0 md:mb-0">
              © 2025 TechMedic Electronics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;