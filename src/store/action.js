export const ActionType = {
  CHANGE_CITY: `changeCity`,
  GET_OFFERS: `getOffers`,
};

export const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: selectedCity,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  })
};
