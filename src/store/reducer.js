import {ActionType} from './action';
import {DEFAULT_CITY, AuthorizationStatus} from '../common/const';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  favoriteOffers: [],
  isFavoriteDataLoaded: false,
  reviews: [],
  areReviewsLoaded: false,
  nearOffers: [],
  areNearOffersLoaded: false,
  place: [],
  isPropertyLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH
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
        
        case ActionType.GET_ROOM:
          return {
            ...state,
            place: action.payload,
            isPropertyLoaded: true
          };
      
    case ActionType.CHANGE_AUTORIZED_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      }
  }

  return state;
};

export {reducer};
