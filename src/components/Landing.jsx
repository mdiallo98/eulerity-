import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

function Landing({ data, placeholder }) {
  console.log('THis is the Data:', data);

  return (
    <div>
      <>
        <SearchBar data={data} />
      </>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return <Card data={value} />;
          })}
        </div>
      </div>
      <h1>This is the searchBar</h1>
    </div>
  );
}

export default Landing;
