import React from 'react';
import { useState } from 'react';

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = (event) => {
    let search = event.target.value;
    let result = data.filter((value) => {
      return value.title.tolowerCase.includes(search.tolowerCase());
    });
  };
  return (
    <div style={{ marginTop: '15px' }}>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
