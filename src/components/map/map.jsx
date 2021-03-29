import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {placesPropTypes} from '../../common/prop-types.js';

const Map = (props) => {
  const {offers, activeCity, activePlace} = props;
  const mapRef = useRef();
  const {latitude, longitude, zoom} = offers[0].city.location;
  const center = {lat: latitude, lng: longitude};


  const iconStandard = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const iconActive = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  });

  let map;

  useEffect(() => {

    map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(center, zoom);

    leaflet
     .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
       attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
     })
     .addTo(map);

    offers.map((place) => {
      const icon = place.id === activePlace ? iconActive : iconStandard;
      leaflet
      .marker({
        lat: place.location.latitude,
        lng: place.location.longitude},
      {icon})
    .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [activeCity, activePlace]);

  return (
    <div id="map" ref={mapRef} style={{height: `100%`, width: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: placesPropTypes,
  activeCity: PropTypes.string.isRequired,
  activePlace: PropTypes.number,
};

export default Map;

