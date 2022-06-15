import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios';
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
      <SearchBar placeholder={placeholder} data={data} />
    </div>
  );
}

export default App;
