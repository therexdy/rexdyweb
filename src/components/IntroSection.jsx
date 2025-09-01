import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <section className="w-full h-fit py-1 md:py-2 bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 bg-white text-black dark:bg-black dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center items-center">
          <div className="hidden lg:block lg:w-max order-first ml-4">
            <img
              className="max-w-full h-auto rounded-lg"
              src={process.env.PUBLIC_URL + '/media-files/my_pic.png'}
              alt="Rexdy"
              style={{ objectFit: 'contain', maxWidth: '480px' }}
            />
          </div>
          <div className="mt-16 lg:mt-0 text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                <span className="text-5xl lg:hidden ">👋 </span>
                Hi, I am{' '}
                <span className="relative inline-block text-rexdy-green">
                  Rexdy
                </span>.
              </h1>
              <p className="text-lg text-black dark:text-white leading-relaxed">
                I am interested in <span className="text-rexdy-green font-medium">Systems Programming</span>, <span className="text-rexdy-green font-medium">Computer Networks</span>, <span className="text-rexdy-green font-medium">Machine Learning</span>, and many other things.
                <br />
                But, currently focusing on <span className="text-rexdy-green font-semibold">Machine Learning</span>.
              </p>
            </div>
            <div className="sm:block md:hidden lg:hidden xl:hidden grid grid-cols-1 text-center mt-5 text-xl ">
              <Link to="/Projects" className="p-5  rounded-md my-3 bg-rexdy-green hover:bg-black">Projects</Link>
              <Link to="/Socials" className="p-5 rounded-md my-3 bg-rexdy-green hover:bg-black">Social Links</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
