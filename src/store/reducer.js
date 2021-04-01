import {ActionType} from './action';
import {CITIES, AuthorizationStatus} from '../common/const';

const initialState = {
  activeCity: CITIES[0],
  offers: [],
  isDataLoaded: false,
  favoriteOffers: [],
  isFavoriteDataLoaded: false,
  reviews: [],
  areReviewsLoaded: false,
  nearOffers: [],
  areNearOffersLoaded: false,
  activePlaceId: null,
  place: {},
  isPropertyLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

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

    case ActionType.GET_ACTIVE_PLACE:
      return {
        ...state,
        activePlaceId: action.payload,
      };

    case ActionType.GET_PLACE:
      return {
        ...state,
        place: action.payload,
        isPropertyLoaded: true
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationInfo: action.payload
      };
    case ActionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        message: action.payload
      };

  }

  return state;
};

export {reducer};
