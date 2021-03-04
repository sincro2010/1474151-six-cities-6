import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offersData from './mocks/offers';
import reviewsData from './mocks/reviews';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Setting = {
  NUMBER_OF_PROPERTIES: 312
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
     <App
      propertiesNumber={Setting.NUMBER_OF_PROPERTIES}
      offersData={offersData}
      reviewsData={reviewsData}
    />
  </Provider>,
  document.querySelector(`#root`)
);
