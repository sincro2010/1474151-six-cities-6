import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import Place from '../place/place';
import {ActionCreator} from "../../store/action";

const PlaceList = (props) => {
  const {offers, placeName, setActivePlace, unsetActivePlace} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
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

PlaceList.propTypes = {
  offers: placesPropTypes,
  placeName: PropTypes.string.isRequired,
  setActivePlace: PropTypes.func.isRequired,
  unsetActivePlace: PropTypes.func.isRequired,
};

export {PlaceList};

export default connect(null, mapDispatchToProps)(PlaceList);
