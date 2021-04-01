import {MAX_NUMBER_STARS} from './const';
import {AppRoute} from "./const";

export const getNumberOfStars = (rating) => {
  return `${rating / MAX_NUMBER_STARS * 100}%`;
};

export const getPluralaze = (param) => {
  return `${param > 1 ? `s` : ``}`;
};

export const getOffersInCity = (offers, selectedCity) => {
  return offers.filter((place) => place.city.name === selectedCity);
};

export const getProperty = (id) => AppRoute.OFFER.replace(/:id/, id);

