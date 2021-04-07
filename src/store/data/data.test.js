import {ActionCreator} from '../action';
import {data} from './data';
import {changeFavoriteOffers, updateOffers, updateNearOffers} from '../../common/utils';

describe(`Reducers work correctly`, () => {
 it(`Reducer with no additional parameters should return initial state`, () => {
   expect(data(undefined, {}))
     .toEqual({
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
     });
 });

 it(`Reducer should get places and change data loading status`, () => {
   const state = {offers: [], isDataLoaded: false};

   expect(data(state, ActionCreator.getOffers([{
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "is_favorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   }])))
   .toEqual({offers: [{
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "is_favorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   }], isDataLoaded: true});
 });

 it(`Reducer should get favorite offers and change data loading status`, () => {
   const state = {favoriteOffers: [], isFavoriteDataLoaded: false};

   expect(data(state, ActionCreator.getFavoriteOffers([{
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "is_favorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   }])))
     .toEqual({favoriteOffers: [{
       "bedrooms": 3,
       "city": {
         "location": {
           "latitude": 52.370216,
           "longitude": 4.895168,
           "zoom": 10
         },
         "name": `Amsterdam`
       },
       "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
       "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
       "host": {
         "avatar_url": `img/1.png`,
         "id": 3,
         "is_pro": true,
         "name": `Angelina`
       },
       "id": 1,
       "images": [`img/1.png`, `img/2.png`],
       "is_favorite": false,
       "is_premium": false,
       "location": {
         "latitude": 52.35514938496378,
         "longitude": 4.673877537499948,
         "zoom": 8
       },
       "max_adults": 4,
       "preview_image": `img/1.png`,
       "price": 120,
       "rating": 4.8,
       "title": `Beautiful & luxurious studio at great location`,
       "type": `apartment`
     }], isFavoriteDataLoaded: true});
 });

 it(`Reducer should get reviews and change data loading status`, () => {
   const state = {reviews: [], areReviewsLoaded: false};

   expect(data(state, ActionCreator.getReviews([{
     "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "date": `2019-05-08T14:13:56.569Z`,
     "id": 1,
     "rating": 4,
     "user": {
       "avatar_url": `img/1.png`,
       "id": 4,
       "is_pro": false,
       "name": `Max`
     }
   }])))
     .toEqual({reviews: [{
       "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
       "date": `2019-05-08T14:13:56.569Z`,
       "id": 1,
       "rating": 4,
       "user": {
         "avatar_url": `img/1.png`,
         "id": 4,
         "is_pro": false,
         "name": `Max`
       }
     }], areReviewsLoaded: true});
 });

 it(`Reducer should get favorite place and change data loading status`, () => {
   const state = {place: {}, isPropertyLoaded: false};

   expect(data(state, ActionCreator.getPlace({
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "is_favorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   })))
     .toEqual({place: {
       "bedrooms": 3,
       "city": {
         "location": {
           "latitude": 52.370216,
           "longitude": 4.895168,
           "zoom": 10
         },
         "name": `Amsterdam`
       },
       "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
       "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
       "host": {
         "avatar_url": `img/1.png`,
         "id": 3,
         "is_pro": true,
         "name": `Angelina`
       },
       "id": 1,
       "images": [`img/1.png`, `img/2.png`],
       "is_favorite": false,
       "is_premium": false,
       "location": {
         "latitude": 52.35514938496378,
         "longitude": 4.673877537499948,
         "zoom": 8
       },
       "max_adults": 4,
       "preview_image": `img/1.png`,
       "price": 120,
       "rating": 4.8,
       "title": `Beautiful & luxurious studio at great location`,
       "type": `apartment`
     }, isPropertyLoaded: true});
 });

 it(`Reducer should get near offers and change data loading status`, () => {
   const state = {nearOffers: [], areNearOffersLoaded: false};

   expect(data(state, ActionCreator.getNearOffers([{
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "is_favorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   }])))
     .toEqual({nearOffers: [{
       "bedrooms": 3,
       "city": {
         "location": {
           "latitude": 52.370216,
           "longitude": 4.895168,
           "zoom": 10
         },
         "name": `Amsterdam`
       },
       "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
       "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
       "host": {
         "avatar_url": `img/1.png`,
         "id": 3,
         "is_pro": true,
         "name": `Angelina`
       },
       "id": 1,
       "images": [`img/1.png`, `img/2.png`],
       "is_favorite": false,
       "is_premium": false,
       "location": {
         "latitude": 52.35514938496378,
         "longitude": 4.673877537499948,
         "zoom": 8
       },
       "max_adults": 4,
       "preview_image": `img/1.png`,
       "price": 120,
       "rating": 4.8,
       "title": `Beautiful & luxurious studio at great location`,
       "type": `apartment`
     }], areNearOffersLoaded: true});
 });

 it(`Reducer should update favorite place`, () => {
   const offers = [{
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "isFavorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   },
   {
     "bedrooms": 1,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "isFavorite": true,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   }];

   const place = {
     "bedrooms": 3,
     "city": {
       "location": {
         "latitude": 52.370216,
         "longitude": 4.895168,
         "zoom": 10
       },
       "name": `Amsterdam`
     },
     "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
     "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
     "host": {
       "avatar_url": `img/1.png`,
       "id": 3,
       "is_pro": true,
       "name": `Angelina`
     },
     "id": 1,
     "images": [`img/1.png`, `img/2.png`],
     "isFavorite": false,
     "is_premium": false,
     "location": {
       "latitude": 52.35514938496378,
       "longitude": 4.673877537499948,
       "zoom": 8
     },
     "max_adults": 4,
     "preview_image": `img/1.png`,
     "price": 120,
     "rating": 4.8,
     "title": `Beautiful & luxurious studio at great location`,
     "type": `apartment`
   };

   const updatedFavoriteOffers = changeFavoriteOffers(offers, place);
   const updatedOffers = updateOffers(offers, place);
   const updatedNearOffers = updateNearOffers(offers, place);

   const state = {
     favoriteOffers: offers,
     offers,
     nearOffers: offers
   };

   expect(data(state, ActionCreator.updateFavoritePlace(place)))
     .toEqual({
       offers: updatedOffers,
       favoriteOffers: updatedFavoriteOffers,
       nearOffers: updatedNearOffers
     });
 });

 it(`Reducer should add place to favorite`, () => {
   const state = {
     place: {id: 1, isFavorite: false}
   };

   expect(data(state, ActionCreator.changeIsFavoritePlace()))
     .toEqual({
       place: {id: 1, isFavorite: true}
     });
 });
});
