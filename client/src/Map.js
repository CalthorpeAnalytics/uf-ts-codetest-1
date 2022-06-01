import { useState } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import CityInfo from './CityInfo';
import Pin from './Pin';

const REACT_APP_MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYnJhZGxleWJvc3NhcmR1ZiIsImEiOiJja3NoeWR2ODkxemFoMnBwYTM1emhhYmU4In0.etmCrrx1r0vece_U8jvwFw';

function Map(props) {
  const { cities } = props
  const [popupInfo, setPopupInfo] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -102.4376,
    zoom: 4
  });

  return (
    <div className="map">
      <ReactMapGL
          initialViewState={{...viewport}}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => setViewport(viewport)}
        >

        {cities.map((city, index) => (
          <Pin city={city} onClick={setPopupInfo}/>
        ))}

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
    </div>
  );
 }

 export default Map;