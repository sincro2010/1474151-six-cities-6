import {AVATAR_URL} from '../common/const';

export default [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: `Angelina`
    },
    id: 1,
    images: [`img/room.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: `apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `Аpartment`
  }, {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: `Amsterdam`
    },
    description: `Comfortable new private room.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: `Vika`
    },
    id: 2,
    images: [`img/studio-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    maxAdults: 3,
    previewImage: `room.jpg`,
    price: 80,
    rating: 3.7,
    title: `Wood and stone place`,
    type: `Private room`
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: `Amsterdam`
    },
    description: `Beautiful, wonderful Apartment.`,
    goods: [`Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Ann`
    },
    id: 3,
    images: [`img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
    maxAdults: 3,
    previewImage: `apartment-02.jpg`,
    price: 132,
    rating: 3,
    title: `Canal View Prinsengracht`,
    type: `Apartment`
  }, {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      },
      name: `Amsterdam`
    },
    description: `Comfortable new private room.`,
    goods: [`Heating`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: `Stepan`
    },
    id: 4,
    images: [`img/studio-01.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    maxAdults: 3,
    previewImage: `apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 12
      },
      name: `Paris`
    },
    description: `Comfortable new private room.`,
    goods: [`Heating`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: `Ilyas`
    },
    id: 5,
    images: [`img/studio-01.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.86667920803264,
      longitude: 2.3855048900818394,
      zoom: 10
    },
    maxAdults: 2,
    previewImage: `apartment-03.jpg`,
    price: 520,
    rating: 5,
    title: `Cool apartment in the center of Paris`,
    type: `Apartment`}
];
