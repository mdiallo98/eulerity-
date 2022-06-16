import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';
import CardView from './components/CardView';
function App() {
  const url = 'http://eulerity-hackathon.appspot.com/pets';
  const [data, setData] = useState([]);

  useEffect(() => {
    usefetch();
  }, []);

  const usefetch = async () => {
    let response = await axios.get(url);

    setData(response.data);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing data={data} />} />
        <Route path="/pet/:id" element={<CardView data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
