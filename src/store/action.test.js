import {
  ActionType,
  ActionCreator
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    };
    expect(ActionCreator.changeCity(`Paris`)).toEqual(expectedAction);
  });

  it(`Action creator for change sorting returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: `Popular`
    };
    expect(ActionCreator.changeSorting(`Popular`)).toEqual(expectedAction);
  });

  it(`Action creator for get active place id returns correct action`, () => {
    const expectedAction = {
      type: ActionType.GET_ACTIVE_PLACE,
      payload: 1
    };
    expect(ActionCreator.getActivePlace(1)).toEqual(expectedAction);
  });

  it(`Action creator for get offers returns correct action`, () => {
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
    }];
    const expectedAction = {
      type: ActionType.GET_OFFERS,
      payload: offers
    };
    expect(ActionCreator.getOffers(offers)).toEqual(expectedAction);
  });

  it(`Action creator for get favorite offers returns correct action`, () => {
    const favoriteOffers = [{
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
    }];
    const expectedAction = {
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: favoriteOffers
    };
    expect(ActionCreator.getFavoriteOffers(favoriteOffers)).toEqual(expectedAction);
  });

  it(`Action creator for requiring authorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    };
    expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual(expectedAction);
  });

  it(`Action creator for redirecting to route returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    };
    expect(ActionCreator.redirectToRoute(`/`)).toEqual(expectedAction);
  });

  it(`Action creator for change authorization info returns correct action`, () => {
    const info = {
      "avatar_url": `img/1.png`,
      "email": `Oliver.conner@gmail.com`,
      "id": 1,
      "is_pro": false,
      "name": `Oliver.conner`
    };

    const expectedAction = {
      type: ActionType.AUTHORIZATION_INFO,
      payload: info
    };
    expect(ActionCreator.authorizationInfo(info)).toEqual(expectedAction);
  });

  it(`Action creator for get reviews returns correct action`, () => {
    const reviews = [{
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
    }];

    const expectedAction = {
      type: ActionType.GET_REVIEWS,
      payload: reviews
    };
    expect(ActionCreator.getReviews(reviews)).toEqual(expectedAction);
  });

  it(`Action creator for update favorite place returns correct action`, () => {
    const place = [{
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
    }];

    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE_PLACE,
      payload: place
    };
    expect(ActionCreator.updateFavoritePlace(place)).toEqual(expectedAction);
  });

  it(`Action creator for get place returns correct action`, () => {
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
    };

    const expectedAction = {
      type: ActionType.GET_PLACE,
      payload: place
    };
    expect(ActionCreator.getPlace(place)).toEqual(expectedAction);
  });

  it(`Action creator for get near offers returns correct action`, () => {
    const nearOffers = [{
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
    }];

    const expectedAction = {
      type: ActionType.GET_NEAR_OFFERS,
      payload: nearOffers
    };
    expect(ActionCreator.getNearOffers(nearOffers)).toEqual(expectedAction);
  });

  it(`Action creator for setting error message returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ERROR_MESSAGE,
      payload: `404`
    };
    expect(ActionCreator.setErrorMessage(`404`)).toEqual(expectedAction);
  });

  it(`Action creator for change favorite place returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_IS_FAVORITE_PLACE,
    };
    expect(ActionCreator.changeIsFavoritePlace()).toEqual(expectedAction);
  });
});
