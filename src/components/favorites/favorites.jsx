import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import Header from '../header/header';
import FavoritesCity from './favorites-city';
import {fetchFavoritePlaceList} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';

const Favorites = (props) => {
  const {favoriteOffers, isFavoriteDataLoaded, onFavoritePageRender} = props;

  const favoriteCities = Array.from(new Set(favoriteOffers.map((place) => place.city.name)));

  useEffect(() => {
    if (!isFavoriteDataLoaded) {
      onFavoritePageRender();
    }
  }, [isFavoriteDataLoaded]);

  if (!isFavoriteDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city, index) => {
                const OffersInFavoriteCity = favoriteOffers.filter((place) => place.city.name === city);
                return (
                  <FavoritesCity
                    key={index}
                    offers={OffersInFavoriteCity}
                    city={city}
                    placeName="FAVORITES"
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
  isFavoriteDataLoaded: state.isFavoriteDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritePageRender() {
    dispatch(fetchFavoritePlaceList());
  },
});

Favorites.propTypes = {
  favoriteOffers: placesPropTypes,
  isFavoriteDataLoaded: PropTypes.bool.isRequired,
  onFavoritePageRender: PropTypes.func.isRequired
};

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
