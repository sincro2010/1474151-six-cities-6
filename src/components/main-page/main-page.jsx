import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import SortingList from "../sorting-list/sorting-list";
import Header from '../header/header';
import {fetchPlaceList} from "../../store/api-actions";
import PlaceList from '../place-list/place-list';
import CityList from '../city-list/city-list';
import MainEmptyPage from '../main-empty-page/main-empty-page';
import Map from '../map/map';
import {getOffersInCity, sortPlaces} from '../../common/utils';
import LoadingScreen from '../loading-screen/loading-screen';

const MainPage = (props) => {

  const {offers, activeCity, onMainPageRender, isDataLoaded, activeSorting} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onMainPageRender();
    }
  }, [activeCity]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers.length === 0 && `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          {offers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <SortingList />
                <PlaceList offers={sortPlaces(offers, activeSorting)} placeName="MAIN"/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"><Map offers={offers} activeCity={activeCity} /></section>
              </div>
            </div>
            : <MainEmptyPage activeCity={activeCity} />};
        </div>
      </main>
    </div>
  );
};


const mapStateToProps = ({DATA, PLACES}) => ({
  offers: getOffersInCity(DATA.offers, PLACES.activeCity),
  activeCity: PLACES.activeCity,
  activeSorting: PLACES.activeSorting,
  isDataLoaded: DATA.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onMainPageRender() {
    dispatch(fetchPlaceList());
  },
});

MainPage.propTypes = {
  offers: placesPropTypes,
  activeCity: PropTypes.string.isRequired,
  activeSorting: PropTypes.string.isRequired,
  onMainPageRender: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
