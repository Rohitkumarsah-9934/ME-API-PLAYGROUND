import React, { useState, useEffect } from 'react';
import { profileAPI } from './services/api';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import ProjectsList from './components/ProjectsList';
import './index.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    checkAPIHealth();
    fetchProfile();
  }, []);

  const checkAPIHealth = async () => {
    try {
      await profileAPI.healthCheck();
      setApiStatus('connected');
    } catch (err) {
      setApiStatus('disconnected');
    }
  };

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await profileAPI.getProfile();
      if (response.success) {
        setProfile(response.data);
      }
      setError(null);
    } catch (err) {
      setError('Failed to fetch profile. Please ensure the backend is running.');
      console.error('Error fetching profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await profileAPI.search(query);
      if (response.success && response.data) {
        setProfile(response.data);
        setFilteredProjects(null);
      } else {
        setError('No results found for your search');
      }
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Error searching:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSkillFilter = async (skill) => {
    try {
      setLoading(true);
      const response = await profileAPI.getProjectsBySkill(skill);
      if (response.success) {
        setFilteredProjects(response.data);
      }
      setError(null);
    } catch (err) {
      setError('Failed to filter projects.');
      console.error('Error filtering projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetView = () => {
    setFilteredProjects(null);
    fetchProfile();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Me-API Playground
              </h1>
              <p className="text-gray-600 mt-1">
                Backend Assessment - Profile Management System
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    apiStatus === 'connected'
                      ? 'bg-green-500'
                      : apiStatus === 'disconnected'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
                ></div>
                <span className="text-sm text-gray-600">
                  API {apiStatus === 'connected' ? 'Connected' : apiStatus === 'disconnected' ? 'Disconnected' : 'Checking...'}
                </span>
              </div>
              {filteredProjects && (
                <button
                  onClick={resetView}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm font-medium"
                >
                  Reset View
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} onSkillFilter={handleSkillFilter} />

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-4">Loading...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Content */}
        {!loading && !error && (
          <>
            {filteredProjects ? (
              <ProjectsList
                projects={filteredProjects}
                title="Filtered Projects"
              />
            ) : (
              <Profile profile={profile} />
            )}
          </>
        )}

        {/* Instructions */}
        {!loading && profile && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              API Endpoints
            </h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-green-600 font-bold">GET</span>{' '}
                <span className="text-gray-700">/api/health</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-blue-600 font-bold">GET</span>{' '}
                <span className="text-gray-700">/api/profile</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-purple-600 font-bold">POST</span>{' '}
                <span className="text-gray-700">/api/profile</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-orange-600 font-bold">PUT</span>{' '}
                <span className="text-gray-700">/api/profile</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-blue-600 font-bold">GET</span>{' '}
                <span className="text-gray-700">/api/projects?skill=python</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-blue-600 font-bold">GET</span>{' '}
                <span className="text-gray-700">/api/skills/top</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-blue-600 font-bold">GET</span>{' '}
                <span className="text-gray-700">/api/search?q=keyword</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>Built with MERN Stack + Tailwind CSS</p>
          <p className="text-sm mt-1">
            MongoDB • Express.js • React • Node.js • Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
