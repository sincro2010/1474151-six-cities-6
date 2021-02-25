import React, {createRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import placesPropTypes from '../../common/prop-types.js';




const Map = (props) => {
  const {offers} = props;

  const mapRef = createRef();

  const city = [52.38333, 4.9];
  const zoom = 12;


  const map = leaflet.map(`map`, {
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

   const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });


  const offerCords = [52.3709553943508, 4.89309666406198];
  leaflet
  .marker(offerCords, {icon})
  .addTo(map);

  return (
    <div id="map" ref={mapRef} style={{height: `auto`, width: `628px`}}></div>
  );
};

Map.propTypes = {
  offers: placesPropTypes
};

export default Map;
