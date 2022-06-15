import React from 'react';
import Card from './Card';

function SearchBar({ data, placeholder }) {
  console.log('THis is the Data:', data);

  return (
    <div>
      <input
        type="text"
        style={{ color: 'black', marginTop: '150px' }}
        placeholder={placeholder}
      />
      <h1>This is where the data is</h1>

      <div className="contentContainer">
        {data.map((value) => {
          return <Card data={value} />;
        })}
      </div>
      <h1>This is the searchBar</h1>
    </div>
  );
}

export default SearchBar;
