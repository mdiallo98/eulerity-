import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import { useState } from 'react';
function Landing({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  // console.log(data);

  const handleChange = (event) => {
    let search = event.target.value;

    let result = data.filter((value) => {
      console.log(value.title);
      return value.title.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredData(result);
  };

  const defaultData = data.map((value) => {
    return <Card data={value} />;
  });

  const SearchData = filteredData.map((value) => {
    return <Card data={value} />;
  });
  return (
    <div>
      <div style={{ marginTop: '15px' }}>
        <input type="text" onChange={handleChange} />
      </div>
      <div className="container">
        <div className="row">{filteredData ? SearchData : defaultData} </div>
      </div>
    </div>
  );
}

export default Landing;
