import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
    NUMBER_OF_PROPERTIES: 312
  };

ReactDOM.render(
    <App
        propertiesNumber={Setting.NUMBER_OF_PROPERTIES}
    />,
    document.querySelector(`#root`)
);
