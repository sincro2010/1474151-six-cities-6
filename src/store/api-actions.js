import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../common/const";
import {adaptPlaceToClient, adaptReviewToClient} from "./adapter";


export const fetchPlaceList = () => (next, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => next(ActionCreator.getOffers(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchFavoritePlaceList = () => (next, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => next(ActionCreator.getFavoriteOffers(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchRoomReviews = (id) => (next, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => next(ActionCreator.getReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {})
);

export const fetchNearOffers = (id) => (next, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => next(ActionCreator.getNearOffers(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchRoom = (id) => (next, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => next(ActionCreator.getActivePlace(adaptPlaceToClient(data))))
    .then(({data}) => next(ActionCreator.getplace(adaptPlaceToClient(data))))
    .catch(() => {})
);

export const checkAuth = () => (next, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => next(ActionCreator.authorizationInfo(data)))
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logIn = ({login: email, password}) => (next, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => next(ActionCreator.authorizationInfo(data)))
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => next(ActionCreator.redirectToRoute(`/`)))
    .catch(() => {})
);

export const logOut = () => (next, _getState, api) => (
  api.get(`/logout`)
    .then(() => next(ActionCreator.authorizationInfo({})))
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);
