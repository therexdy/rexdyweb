import React from 'react';

const socialMedia = [
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCkS41iYLqSq_N0RwIHmEhaA?sub_confirmation=1' },
    { name: 'GitHub', url: 'https://github.com/truerexdy' },
    { name: 'Discord', url: 'http://discord.gg/Qe8Zf2ySy2' }
  ];

const SocialLinks = () => {
    return (
      <div className="flex items-center justify-center h-1/2">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Social Links</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rexdy-green hover:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-center p-6"
              >
                <span className="text-xl font-semibold text-white">{social.name}</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-gray-600">Check out my profiles on these platforms!</p>
        </div>
      </div>
    );
  };

  export default SocialLinks;