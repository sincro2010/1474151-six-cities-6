export const ActionType = {
  CHANGE_CITY: `places/changeCity`,
  GET_OFFERS: `data/getOffers`,
  GET_FAVORITE_OFFERS: `data/getFavoriteOffers`,
  GET_REVIEWS: `data/getReviews`,
  GET_NEAR_OFFERS: `data/getNearOffers`,
  GET_ACTIVE_PLACE: `places/getActivePlace`,
  GET_PLACE: `data/getPlace`,
  SET_ERROR_MESSAGE: `data/setErrorMessage`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  AUTHORIZATION_INFO: `user/authorizationInfo`,
  CHANGE_IS_FAVORITE_PLACE: `data/changeIsFavoritePLACE`,
  UPDATE_FAVORITE_PLACE: `data/updateFavoritePlace`,
};

export const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: selectedCity,
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
  }),
  getFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.GET_FAVORITE_OFFERS,
    payload: favoriteOffers,
  }),
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),
  getNearOffers: (nearOffers) => ({
    type: ActionType.GET_NEAR_OFFERS,
    payload: nearOffers,
  }),
  getActivePlace: (activePlaceId) => ({
    type: ActionType.GET_ACTIVE_PLACE,
    payload: activePlaceId,
  }),
  getPlace: (place) => ({
    type: ActionType.GET_PLACE,
    payload: place,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  authorizationInfo: (info) => ({
    type: ActionType.AUTHORIZATION_INFO,
    payload: info
  }),
  setErrorMessage: (message) => ({
    type: ActionType.SET_ERROR_MESSAGE,
    payload: message
  }),
  changeIsFavoritePlace: () => ({
    type: ActionType.CHANGE_IS_FAVORITE_PLACE,
  }),
  updateFavoritePlace: (place) => ({
    type: ActionType.UPDATE_FAVORITE_PLACE,
    payload: place
  }),

};


