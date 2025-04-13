import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('media-files/projects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error loading projects: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b-2 border-rexdy-green pb-2">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-md shadow-sm hover:shadow-md transition duration-200">
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.short_description}</p>
              <div className="flex space-x-3">
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rexdy-green focus-visible:ring-offset-2 transition duration-150"
                  >
                    GitHub
                  </a>
                )}
                {project.demo_video && (
                  <a
                    href={project.demo_video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rexdy-green rounded-md hover:bg-rexdy-green/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-rexdy-green focus-visible:ring-offset-2 transition duration-150"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;