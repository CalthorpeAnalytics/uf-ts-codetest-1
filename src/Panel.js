import * as React from 'react';

function Panel(props) {
  const sideLength = 50;
  const cityName = '';

  return (
    <div className="panel">

      <h2>Filters</h2>
      
      <div className="input">
        <label>City Name</label>
        <input
          type="string"
          value={cityName}
        />
      </div>
      
      <div className="input">
        <label>Bounding Box Size</label>
        <input
          type="number"
          value={sideLength}
        />
      </div>

    </div>
  );
}

export default React.memo(Panel);