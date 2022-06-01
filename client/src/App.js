import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './Map';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchCities } from './api';

function App() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    const loadCities = async () => {
      const result = await fetchCities();
      setCities(result);
    };
    loadCities();
  }, []);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(cityName.toLowerCase())
  );

  return (
    <div className="app-container">
      <Map
        cities={filteredCities}
        cityName={cityName}
        onChangeFilter={setCityName}
      />
    </div>
  );
}

export default App;
