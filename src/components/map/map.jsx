import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import placesPropTypes from '../../common/prop-types.js';

const Map = (props) => {
  const {offers} = props;
  const mapRef = useRef();
  
  const id = [];
  id.push(offers.id);

    const city = [52.38333, 4.9];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const useEffect = (() => {

    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView(city, zoom);

  
    leaflet
     .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
       attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
     })
     .addTo(mapRef.current);
  
  

const offerCords = [52.3709553943508, 4.89309666406198];
leaflet
 .marker(offerCords, {icon})
 .addTo(mapRef.current);

/*
  offers.map((place) => {
    leaflet
    .marker({
      latitude: place.location.latitude, 
      longitude: place.location.longitude},
      {icon})
    .addTo(map);

  }); */
  
}, []);
  

 

  return (
    <div id="map" ref={mapRef} style={{height: `auto`, width: `auto`}}></div>

  );
};

Map.propTypes = {
  offers: placesPropTypes
};

export default Map;
