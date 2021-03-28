export const ActionType = {
  CHANGE_CITY: `rent/changeCity`,
  GET_OFFERS: `rent/getOffers`,
  GET_FAVORITE_OFFERS: `rent/getFavoriteOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  GET_REVIEWS: `rent/getReviews`,
  GET_NEAR_OFFERS: `rent/getNearOffers`,
  GET_ACTIVE_PLACE: `rent/getActivePlace`,
  GET_PLACE: `rent/getPlace`,
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
  getActivePlace: (activePlace) => ({
    type: ActionType.GET_ACTIVE_PLACE,
    payload: activePlace,
  }),
  getPlace: (place) => ({
    type: ActionType.GET_PLACE,
    payload: place,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};


