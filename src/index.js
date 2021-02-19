import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NUMBER_OF_PROPERTIES: 312
};

const placeData = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    image: `apartment-01.jpg`,
    type: `Apartment`,
    price: 120,
    rating: 93,
    isPremium: true
  },
  {
    title: `Wood and stone place`,
    image: `room.jpg`,
    type: `Private room`,
    price: 80,
    rating: 80
  },
  {
    title: `Canal View Prinsengracht`,
    image: `apartment-02.jpg`,
    type: `Apartment`,
    price: 132,
    rating: 80
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    image: `apartment-03.jpg`,
    type: `Apartment`,
    price: 180,
    rating: 100,
    isPremium: true
  },
  {
    title: `Wood and stone place`,
    image: `room.jpg`,
    type: `Private room`,
    price: 80,
    rating: 80
  }
];

ReactDOM.render(
    <App
      propertiesNumber={Setting.NUMBER_OF_PROPERTIES}
      placeData={placeData}
    />,
    document.querySelector(`#root`)
);
