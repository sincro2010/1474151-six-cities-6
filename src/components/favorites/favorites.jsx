import React from 'react';
import Header from '../header/header';
import FavoritesCity from './favorites-city';
import {placesPropTypes} from '../../common/prop-types.js';

const Favorites = (props) => {
  const {offers} = props;
  const favoritePlaces = offers.filter((place) => place.isFavorite);

  const favoriteCitiesList = [];
  favoritePlaces.forEach((favoritePlace) => favoriteCitiesList.push(favoritePlace.city.name));
  const favoriteCities = Array.from(new Set(favoriteCitiesList));

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city, index) => {
                const PlacesInFavoriteCity = favoritePlaces.filter((place) => place.city.name === city);
                return (
                  <FavoritesCity
                    key={index}
                    offers={PlacesInFavoriteCity}
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

Favorites.propTypes = {
  offers: placesPropTypes,
};

export default Favorites;
