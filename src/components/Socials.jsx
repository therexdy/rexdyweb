import React from 'react';

const socialMedia = [
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCkS41iYLqSq_N0RwIHmEhaA?sub_confirmation=1' },
    { name: 'GitHub', url: 'https://github.com/truerexdy' },
    { name: 'Discord', url: 'http://discord.gg/Qe8Zf2ySy2' }
  ];

const SocialLinks = () => {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-3xl font-bold text-black bg-white dark:text-white dark:bg-black mb-6">Social Links</h1>
          <div className="grid grid-cols-1 lg:my-5 gap-3 lg:gap-5">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rexdy-green hover:bg-green-700 dark:hover:bg-green-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-center p-6"
              >
                <span className="text-xl font-semibold text-white">{social.name}</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-black dark:text-white">Check out my profiles on these platforms!</p>
        </div>
      </div>
    );
  };

  export default SocialLinks;
