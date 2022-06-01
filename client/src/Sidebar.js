import * as React from 'react';
import CityCard from './CityCard';

/**
 * Render a side bar component that has an filterable input and a list of city cards.
 * The input should filter the cities by name both in the list and on the map.
 * 
 * There are a few existing css classes you may choose to use - sidebar, input 
 */

function Sidebar(props) {
  const { cities, cityName, onChangeFilter } = props
  return (
    <div className="sidebar">
      <div className="input">
        <label>City Name</label>
        <input type="text" value={cityName} onChange={(e) => onChangeFilter(e.target.value)}/>
      </div>
      {cities.map((city) => (
        <CityCard key={city.name} city={city}/>
      ))}
    </div>
  )
}

export default React.memo(Sidebar)