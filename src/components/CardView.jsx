import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function CardView() {
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
  return <div>CardView</div>;
}

export default CardView;
