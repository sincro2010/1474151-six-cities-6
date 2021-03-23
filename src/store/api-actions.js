import {ActionCreator} from "./action";
import {AuthorizationStatus, AppRoute} from "../common/const";
import {adaptPlaceToClient, adaptReviewToClient} from "./adapter";


export const fetchPlaceList = () => (next, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => next(ActionCreator.getOffers(data.map((place) => adaptPlaceToClient(place)))))
);

export const fetchFavoritePlaceList = () => (next, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => next(ActionCreator.getFavoriteOffers(data.map((place) => adaptPlaceToClient(place)))))
);

export const fetchRoomReviews = (id) => (next, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => next(ActionCreator.getReviews(data.map((review) => adaptReviewToClient(review)))))
);

export const fetchNearOffers = (id) => (next, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => next(ActionCreator.getNearOffers(data.map((place) => adaptPlaceToClient(place)))))
);

export const fetchRoom = (id) => (next, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => next(ActionCreator.getRoom(adaptPlaceToClient(data))))
);