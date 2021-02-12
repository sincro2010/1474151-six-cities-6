import React from 'react';
import MainPage from '../main-page/main-page';

const App = (props) => {
    const {cityName} = props;

    return  (
        <MainPage cityName={cityName}/>
    );
};

export default App;