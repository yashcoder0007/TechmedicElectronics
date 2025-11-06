import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-tech-blue via-tech-accent to-tech-orange bg-clip-text text-transparent">
                TechMedic
              </span>
              <span className="text-tech-gray"> Electronics</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-tech-gray hover:text-tech-blue transition-colors">Home</a>
            <Link to="/pcbmanufacture" className="text-tech-gray hover:text-tech-blue transition-colors">
  Single Layer PCB
</Link>
            <Link to="/double-layer-pcb" className="text-tech-gray hover:text-tech-blue transition-colors">Double Layer PCB</Link>
            <Link to="/about" className="text-tech-gray hover:text-tech-blue transition-colors">
  About
</Link>

            {/* <a href="/contact" className="text-tech-gray hover:text-tech-blue transition-colors">Contact</a> */}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            
            <a href="/contact"><Button size="sm" className="bg-tech-blue hover:bg-tech-blue-dark">
              Contact Us
            </Button></a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-tech-gray hover:text-tech-blue transition-colors">Home</a>
              <Link to="/pcbmanufacture" className="text-tech-gray hover:text-tech-blue transition-colors">
  Single Layer PCB
</Link>
              <Link to="/double-layer-pcb" className="text-tech-gray hover:text-tech-blue transition-colors">Double Layer PCB</Link>
              <Link to="/about" className="text-tech-gray hover:text-tech-blue transition-colors">
  About
</Link>
              {/* <a href="/contact" className="text-tech-gray hover:text-tech-blue transition-colors">Contact</a> */}
              <div className="flex flex-col space-y-2 pt-4">
                {/* <Button variant="outline" size="sm">Get Quote</Button> */}
                <a href="/contact"><Button size="sm" className="bg-tech-blue hover:bg-tech-blue-dark">
              Contact Us
            </Button></a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;