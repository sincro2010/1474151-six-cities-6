import React from 'react';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import Place from '../place/place';

const FavoritesCity = (props) => {
  const {offers, city, placeName} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((place) => (
          <Place
            key={place.id}
            place={place}
            placeName={placeName}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  offers: placesPropTypes,
  city: placesPropTypes,
  placeName: PropTypes.string.isRequired
};

export default FavoritesCity;
