import React from 'react';

const Profile = ({ profile }) => {
  if (!profile) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center">No profile data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{profile.name}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {profile.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Education:</span> {profile.education}
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills && profile.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      {profile.projects && profile.projects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Projects</h3>
          <div className="space-y-4">
            {profile.projects.map((project, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                <p className="text-gray-600 mt-1">{project.description}</p>
                {project.links && (
                  <a
                    href={project.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Work Experience Section */}
      {profile.work && profile.work.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Work Experience</h3>
          <div className="space-y-4">
            {profile.work.map((job, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="text-lg font-semibold text-gray-800">{job.position}</h4>
                <p className="text-gray-700 font-medium">{job.company}</p>
                <p className="text-gray-500 text-sm">{job.duration}</p>
                {job.description && (
                  <p className="text-gray-600 mt-2">{job.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links Section */}
      {profile.links && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Links</h3>
          <div className="flex flex-wrap gap-3">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            )}
            {profile.links.portfolio && (
              <a
                href={profile.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Portfolio
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
