import {ActionType} from '../action';
import {CITIES} from "../../common/const";

const initialState = {
  activeCity: CITIES[0],
  activePlaceId: null,
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
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
