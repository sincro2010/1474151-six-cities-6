import {ActionType} from './action';
import {DEFAULT_CITY} from '../common/const';
import {getOffersInCity} from '../common/utils';

const initialState = {
 activeCity: DEFAULT_CITY,
 offers
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
       offers: getOffersInCity(initialState.offers, state.activeCity)
     };
 }

 return state;
};


export {reducer};