import {useState} from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import BoundingBox from './BoundingBox';
import CityInfo from './CityInfo';
import Pins from './Pins';
import CITIES from './cities.json';

const REACT_APP_MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYnJhZGxleWJvc3NhcmR1ZiIsImEiOiJja3NoeWR2ODkxemFoMnBwYTM1emhhYmU4In0.etmCrrx1r0vece_U8jvwFw';

function Map() {

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -102.4376,
    zoom: 3 
  });

  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <ReactMapGL
      initialViewState={{...viewport}}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
      style={{width: '100vw', height: '100vh'}}
    >

    <Pins data={CITIES} onClick={setPopupInfo} />

    <BoundingBox/>

    {popupInfo && (

      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={() => setPopupInfo(null)}
      >
        <CityInfo info={popupInfo} />
      </Popup>
    )}
    </ReactMapGL>
  );
 }

 export default Map;