import React, { useState } from 'react';

const Navbar = ({ getTracks }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    getTracks(query);
  };

  return (
    <div className='flex justify-center py-2'>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex">
        <div className="relative flex items-center flex-grow">
          <input
            id="default-search"
            onChange={e => setQuery(e.target.value)}
            className="w-full py-3 ps-3 overflow-hidden text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Song by Name..."
            required
          />
        </div>
        <button
          type="submit"
          className="ml-2 text-white bg-blue-700 focus:bg-cyan-700 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
