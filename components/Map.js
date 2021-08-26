import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
  // To transfrom prop object to the object desired for ReactMapGl center
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  //   Select a Location on maps
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/vivekmalhan/ckssoy4yw0kuf17mqa96ze93c"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(newport) => setViewport(newport)}
    >
      {searchResults.map((result) => (
        <div key={result.img}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>
          {/*  The popup to show if we click a marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            ''
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
