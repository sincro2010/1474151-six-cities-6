import {ActionType} from '../action';
import {changeFavoriteOffers, updateOffers, updateNearOffers} from '../../common/utils';

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

    case ActionType.UPDATE_FAVORITE_PLACE:
      return {
        ...state,
        favoriteOffers: changeFavoriteOffers(state.favoriteOffers, action.payload),
        offers: updateOffers(state.offers, action.payload),
        nearOffers: updateNearOffers(state.nearOffers, action.payload)
      };
    case ActionType.CHANGE_IS_FAVORITE_PLACE:
      return {
        ...state,
        place: Object.assign({}, state.place, {isFavorite: !state.place.isFavorite})
      };

  }

  return state;
};

export {data};
