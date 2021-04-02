import {ActionType} from '../action';
import {getOffers, getFavoriteOffers, getReviews, getNearOffers, getPlace, redirectToRoute, setErrorMessage} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  favoriteOffers: [],
  isFavoriteDataLoaded: false,
  reviews: [],
  areReviewsLoaded: false,
  nearOffers: [],
  areNearOffersLoaded: false,
  place: {},
  isPropertyLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };

    case ActionType.GET_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteDataLoaded: true
      };

    case ActionType.GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        areReviewsLoaded: true
      };

    case ActionType.GET_NEAR_OFFERS:
      return {
        ...state,
        nearOffers: action.payload,
        areNearOffersLoaded: true
      };

    case ActionType.GET_PLACE:
      return {
        ...state,
        place: action.payload,
        isPropertyLoaded: true
      };

    case ActionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        message: action.payload
      };

  }

  return state;
};

export {data};
