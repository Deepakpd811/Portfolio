import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-black text-yellow-400 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">Deepak Prasad</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* <a href="#about" className="hover:text-yellow-300 transition-colors">About</a> */}
            <a href="#skills" className="hover:text-yellow-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-yellow-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Deepakpd811" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/deepak-prasad-054715250/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-yellow-300">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;