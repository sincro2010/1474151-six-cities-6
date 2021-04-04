import {ActionType} from '../action';
import {CITIES, SortingTypes} from "../../common/const";

const initialState = {
  activeCity: CITIES[0],
  activePlaceId: null,
  activeSorting: SortingTypes.POPULAR,
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };
    case ActionType.GET_ACTIVE_PLACE:
      return {
        ...state,
        activePlaceId: action.payload,
      };
  }

  return state;
};

export {places};
