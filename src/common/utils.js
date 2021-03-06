import {MAX_NUMBER_STARS} from './const';
import {AppRoute, SortingTypes} from "./const";

export const getNumberOfStars = (rating) => {
  return `${rating / MAX_NUMBER_STARS * 100}%`;
};

export const getPluralaze = (param) => {
  return `${param > 1 ? `s` : ``}`;
};

export const getOffersInCity = (offers, selectedCity) => {
  return offers.filter((place) => place.city.name === selectedCity);
};

export const sortPlaces = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.PRICE_LOW:
      return [...offers].sort((a, b) => (a.price - b.price));
    case SortingTypes.PRICE_HIGH:
      return [...offers].sort((a, b) => (b.price - a.price));
    case SortingTypes.RATING:
      return [...offers].sort((a, b) => (b.rating - a.rating));
    default:
      return [...offers];
  }
};

export const getProperty = (id) => AppRoute.OFFER.replace(/:id/, id);


const deletePlace = (offers, deletedPlace) => {
  return offers.filter((place) => place.id !== deletedPlace.id);
};

export const updateOffers = (offers, updatedPlace) => {
  const offerIndex = offers.findIndex((place) => place.id === updatedPlace.id);

  return [...offers.slice(0, offerIndex),
    updatedPlace,
    ...offers.slice(offerIndex + 1)];
};

export const updateNearOffers = (places, updatedPlaces) => {
  const index = places.findIndex((place) => place.id === updatedPlaces.id);

  if (index === -1) {
    return places;
  }

  return [...places.slice(0, index),
    updatedPlaces,
    ...places.slice(index + 1)];
};

export const changeFavoriteOffers = (offers, updatedPlace) => {
  return updatedPlace.isFavorite ? [updatedPlace, ...offers] : deletePlace(offers, updatedPlace);
};

export const sortingDate = (data) => {
  return data.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

