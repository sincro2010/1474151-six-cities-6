import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../common/const";
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
    .then(({data}) => next(ActionCreator.getActivePlace(adaptPlaceToClient(data))))
    .then(({data}) => next(ActionCreator.getplace(adaptPlaceToClient(data))))
);

export const logIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.authorizationInfo({})))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);
