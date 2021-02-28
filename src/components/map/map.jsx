import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {placesPropTypes} from '../../common/prop-types.js';

const Map = (props) => {
  const { offers } = props;
  const mapRef = useRef();

    const city = [52.38333, 4.9];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    useEffect (() => {
console.log(mapRef.current);
    map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
     .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
       attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
     })
     .addTo(map);

  offers.map((place) => {
    leaflet
    .marker({
      lat: place.location.latitude, 
      lng: place.location.longitude},
      { icon })
    .addTo(map);
  });

});
  
  return (
    <div id="map" ref={mapRef} style={{ height: `100%`, width: `100%` }}></div>
  );
};

Map.propTypes = {
  offers: placesPropTypes
};

export default Map;
