import React from 'react';

const ProjectsList = ({ projects, title = "Projects" }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-500 text-center py-4">No projects found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {title} ({projects.length})
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
            {project.links && (
              <a
                href={project.links}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
