import React from 'react';
import { ArrowRight } from 'lucide-react';
import TypedText from './TypedText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-black text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-yellow-500">
              <TypedText
                strings={[
                  "I'm a Developer",
                  "I'm a Problem Solver",
                  "I'm a Tech Enthusiast"
                ]}
                typeSpeed={70}
                backSpeed={50}
                className="inline-block"
              />
            </span>
            <br />
            Building Digital <br />
            Experiences
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Hi, I'm Deepak Prasad. I craft responsive websites and web applications
            that deliver exceptional user experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;