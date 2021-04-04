import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../common/const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const CityList = (props) => {
  const {activeCity, onCityClick} = props;
  const cityClick = (evt) => {
    evt.preventDefault();
    onCityClick(evt.target.textContent);
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, index) => {
        return (
          <li className="locations__item" key={city + index} onClick={cityClick}>
            <a className={`locations__item-link tabs__item ${city === activeCity && `tabs__item--active`}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({PLACES}) => ({
  activeCity: PLACES.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(selectedCity) {
    dispatch(ActionCreator.changeCity(selectedCity));
  },
});

CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
