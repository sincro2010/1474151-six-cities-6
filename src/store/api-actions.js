import {ActionCreator} from "./action";
import {AuthorizationStatus, AppRoute, HttpCode, Status} from "../common/const";
import {adaptPlaceToClient, adaptReviewToClient} from "./adapter";


export const fetchPlaceList = () => (next, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => next(ActionCreator.getOffers(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchFavoritePlaceList = () => (next, _getState, api) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}) => next(ActionCreator.getFavoriteOffers(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchRoomReviews = (id) => (next, _getState, api) => (
  api.get(`${AppRoute.COMMENTS}/${id}`)
    .then(({data}) => next(ActionCreator.getReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {})
);

export const sendRoomReview = (id, {rating, comment}) => (next, _getState, api) => {
  api.post(`${AppRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => next(ActionCreator.getReviews(data.map((review) => adaptReviewToClient(review)))))
    .then(() => next(ActionCreator.statusReviewSending(Status.SUCCESS)))
    .catch(() => next(ActionCreator.statusReviewSending(Status.ERROR)));
};

export const fetchNearOffers = (id) => (next, _getState, api) => (
  api.get(`${AppRoute.HOTELS}/${id}/${AppRoute.NEARBY}`)
    .then(({data}) => next(ActionCreator.getNearOffers(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchRoom = (id) => (next, _getState, api) => (
  api.get(`${AppRoute.HOTELS}/${id}`)
    .then((place) => next(ActionCreator.getPlace(adaptPlaceToClient(place.data))))
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.NOT_FOUND:
          next(ActionCreator.redirectToRoute(AppRoute.ERROR));
          break;
        default:
          next(ActionCreator.setErrorMessage(response.status));
          break;
      }
    })
);

export const checkAuth = () => (next, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => next(ActionCreator.authorizationInfo(data)))
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logIn = ({login: email, password}) => (next, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => next(ActionCreator.authorizationInfo(data)))
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => next(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);

export const logOut = () => (next, _getState, api) => (
  api.get(AppRoute.LOGOUT)
    .then(() => next(ActionCreator.authorizationInfo({})))
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const changeFavorite = ({id, status}) => (next, _getState, api) => (
  api.post(`${AppRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => (adaptPlaceToClient(data)))
    .then((data) => next(ActionCreator.updateFavoritePlace(data)))
);
