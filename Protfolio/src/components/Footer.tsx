
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-yellow-400">Deepak Prasad</h3>
            <p className="text-gray-400 mt-2">Building the web, one project at a time</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Deepakpd811" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/deepak-prasad-054715250/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Deepak Prasad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;