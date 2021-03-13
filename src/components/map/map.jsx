import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {placesPropTypes} from '../../common/prop-types.js';

const Map = (props) => {
  const {offers, activeCity} = props;
  const mapRef = useRef();
  const city = offers.find((place) => place.city.name === activeCity).city.location;
  const center = {lat: city.latitude, lng: city.longitude};
  const zoom = city.zoom;


  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
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
  }, [offers]);

  return (
    <div id="map" ref={mapRef} style={{height: `100%`, width: `100%`}}></div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
});

Map.propTypes = {
  offers: placesPropTypes,
  activeCity: PropTypes.string.isRequired,
};

export {Map};
export default connect(mapStateToProps, null)(Map);
