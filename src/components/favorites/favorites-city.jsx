import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import Place from '../place/place';
import {ActionCreator} from "../../store/action";

const FavoritesCity = (props) => {
  const {offers, city, placeName, setActivePlace, unsetActivePlace} = props;
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
            setActivePlace={setActivePlace}
            unsetActivePlace={unsetActivePlace}
            key={place.id}
            place={place}
            placeName={placeName}
          />
        ))}
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActivePlace(id) {
    dispatch(ActionCreator.getActivePlace(id));
  },
  unsetActivePlace() {
    dispatch(ActionCreator.getActivePlace(null));
  }
});

FavoritesCity.propTypes = {
  offers: placesPropTypes,
  city: PropTypes.string.isRequired,
  placeName: PropTypes.string.isRequired,
  setActivePlace: PropTypes.func.isRequired,
  unsetActivePlace: PropTypes.func.isRequired,
};

export {FavoritesCity};

export default connect(null, mapDispatchToProps)(FavoritesCity);
