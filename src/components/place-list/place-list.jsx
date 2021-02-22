import React from 'react';
import placesPropTypes from '../../common/prop-types.js';
import {useState} from 'react';
import Place from '../place/place';

const PlaceList = (props) => {
 const {offers} = props;
 const [activePlace, setActivePlace] = useState(false);
 const isActivePlace = (place) => place.id === activePlace;
  return (
  <div className="cities__places-list places__list tabs__content">
   {offers.map((place) => (
    <Place
    mouseOver={() => 
    activePlace(place.id)}
    mouseOut={() => 
    setActivePlace(null)}
    isActivePlace={isActivePlace(place)}
    key={place.id}
    place={place}
    />
   ))}
 </div>
 );
};

PlaceList.propTypes = {
 offers: placesPropTypes
};

export default PlaceList;