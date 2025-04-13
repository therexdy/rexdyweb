import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const IntroSection = () => {
  return (
    <section className="flex-grow w-full bg-white dark:bg-gray-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 h-full py-12 md:py-24">
        
        <div className="text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I am{' '}
            <span className="relative inline-block text-rexdy-green">
              Rexdy
              <span className="absolute left-0 bottom-0 w-full h-1 bg-rexdy-green -z-10 translate-y-1/2"></span>
            </span>.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am interested in <span className="text-rexdy-green font-medium">ML</span>, <span className="text-rexdy-green font-medium">Full Stack</span>, <span className="text-rexdy-green font-medium">Systems Programming</span>, and many other things.
            <br />
            But, currently focusing on <span className="text-rexdy-green font-semibold">Full Stack</span>.
          </p>

          <div className="block md:hidden mt-6">
            <Link to="/Projects" className="text-rexdy-green font-medium mr-4">Projects</Link>
            <Link to="/Socials" className="text-rexdy-green font-medium">Socials</Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src="/rexdy.png"
            alt="Rexdy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
