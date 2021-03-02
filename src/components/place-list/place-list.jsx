import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import Place from '../place/place';

const PlaceList = (props) => {
  const {offers, placeName} = props;
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
          placeName={placeName}
        />
      ))}
    </div>
  );
};

PlaceList.propTypes = {
  offers: placesPropTypes,
  placeName: PropTypes.string.isRequired
};

export default PlaceList;
