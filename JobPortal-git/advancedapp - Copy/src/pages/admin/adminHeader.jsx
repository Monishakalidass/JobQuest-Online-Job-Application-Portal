import React, { useState } from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling

const adminHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can add further logic here, like searching/filtering content based on the search term
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default adminHeader;
