import React, { useState } from 'react';

const SearchBar = ({ onSearch, onSkillFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [skillQuery, setSkillQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleSkillFilter = (e) => {
    e.preventDefault();
    if (skillQuery.trim()) {
      onSkillFilter(skillQuery);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Search & Filter</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* General Search */}
        <form onSubmit={handleSearch} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Search Profile
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, skill, education..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Search
            </button>
          </div>
        </form>

        {/* Skill Filter */}
        <form onSubmit={handleSkillFilter} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Filter Projects by Skill
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
              placeholder="e.g., Python, React..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
