import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CITY_NAME = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

ReactDOM.render(
    <App
        cityName={CITY_NAME}
    />,
    document.querySelector(`#root`)
);
