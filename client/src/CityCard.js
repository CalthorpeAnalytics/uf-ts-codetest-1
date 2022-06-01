import React from 'react'

/**
 * Render a city card component that shows the image, name/state, and popultion
 * There are a few premade css classes if you choose to use them - card, image, text
 */

function CityCard(props) {
  const { city } = props;

  return (
    <div className="card" >
      <div className="image">
        <img src={city.image} alt={city.name} />
      </div>
      <div className="text">
        {`${city.name}, ${city.state}`}
        <div>{city.population}</div>
      </div>
    </div>
  )
}

export default CityCard;