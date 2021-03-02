import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offersData from './mocks/offers';
import reviewsData from './mocks/reviews';

const Setting = {
  NUMBER_OF_PROPERTIES: 312
};

ReactDOM.render(
    <App
      propertiesNumber={Setting.NUMBER_OF_PROPERTIES}
      offersData={offersData}
      reviewsData={reviewsData}
    />,
    document.querySelector(`#root`)
);
