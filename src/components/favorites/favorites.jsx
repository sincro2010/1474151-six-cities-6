import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {placesPropTypes} from '../../common/prop-types.js';
import Header from '../header/header';
import FavoritesCity from './favorites-city';
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {fetchFavoritePlaceList} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';

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
      {favoriteOffers.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city, index) => {
                  const OffersInFavoriteCity = favoriteOffers.filter((place) => place.city.name === city);
                  return (
                    <FavoritesCity
                      key={city + index}
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
        : <FavoritesEmpty />
      }
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = ({DATA}) => ({
  favoriteOffers: DATA.favoriteOffers,
  isFavoriteDataLoaded: DATA.isFavoriteDataLoaded,
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
