import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/Landing';
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

  const placeholder = 'Search for pet';
  return (
    <div className="App">
      <Landing placeholder={placeholder} data={data} />
    </div>
  );
}

export default App;
