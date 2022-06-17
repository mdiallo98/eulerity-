import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function CardView({ data }) {
  let { id } = useParams();
  const [result, setResult] = useState({});

  const url = 'http://eulerity-hackathon.appspot.com/pets';
  useEffect(() => {
    usefetch();
  }, [id]);

  const usefetch = async () => {
    let response = await axios.get(url);

    setResult(response.data);
  };
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={data.url} />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-title">{data.description}</p>
          {/* <Link className="btn btn-danger">Show details</Link> */}
        </div>
      </div>
    </div>
  );
}

export default CardView;
