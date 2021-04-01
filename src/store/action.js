export const ActionType = {
  CHANGE_CITY: `rent/changeCity`,
  GET_OFFERS: `rent/getOffers`,
  GET_FAVORITE_OFFERS: `rent/getFavoriteOffers`,
  GET_REVIEWS: `rent/getReviews`,
  GET_NEAR_OFFERS: `rent/getNearOffers`,
  GET_ACTIVE_PLACE: `rent/getActivePlace`,
  GET_PLACE: `rent/getPlace`,
  SET_ERROR_MESSAGE: `data/setErrorMessage`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  AUTHORIZATION_INFO: `user/authorizationInfo`,
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
};


