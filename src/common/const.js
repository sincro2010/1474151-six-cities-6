export const AVATAR_URL = `https://i.pravatar.cc/128`;

export const MAX_NUMBER_STARS = 5;
export const MAX_NUMBER_PIN = 3;
export const MAX_PROPERTY_IMAGES = 6;
export const REVIEW_MIN_SYMBOLS = 10;
export const REVIEW_MAX_SYMBOLS = 300;

export const PlaceSettings = {
  MAIN: {
    article: `cities__place-card`,
    image: {
      imageClass: `cities__image-wrapper`,
      width: 260,
      height: 200,
    },
    info: ``
  },
  NEAR: {
    article: `near-places__card`,
    image: {
      imageClass: `near-places__image-wrapper`,
      width: 260,
      height: 200,
    },
    info: ``
  },
  FAVORITES: {
    article: `favorites__card`,
    image: {
      imageClass: `favorites__image-wrapper`,
      width: 150,
      height: 110,
    },
    info: `favorites__card-info`
  }
};

export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const SortingTypes = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  RATING: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `auth`,
  NO_AUTH: `no_auth`,
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  MAIN: `/`,
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`,
  LOGOUT: `/logout`,
  COMMENTS: `/comments`,
  ERROR: `/error`,
  OFFER: `/offer/:id`,
  NEARBY: `nearby`
};

export const ButtonTypes = {
  PLACE: {
    noFavorite: `place-card__bookmark-button`,
    favorite: `place-card__bookmark-button--active`,
    icon: `place-card__bookmark-icon`,
    width: `18`,
    height: `19`
  },
  ROOM: {
    noFavorite: `property__bookmark-button`,
    favorite: `property__bookmark-button--active`,
    icon: `property__bookmark-icon`,
    width: `31`,
    height: `33`
  }
};

export const HttpCode = {
  NOT_FOUND: 404
};

export const Status = {
  PENDING: `pending`,
  SUCCESS: `success`,
  ERROR: `status/error`
};


