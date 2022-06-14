import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="text" style={{ color: 'black', marginTop: '150px' }} />
      <div className="contentContainer"></div>
      <h1 style={{ color: 'white' }}>This is the searchBar</h1>
    </div>
  );
}

export default SearchBar;
