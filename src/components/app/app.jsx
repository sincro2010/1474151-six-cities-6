import React from 'react';
import MainPage from '../main-page/main-page';

const App = (props) => {
    const {propertiesNumber} = props;

    return  (
        <MainPage propertiesNumber={propertiesNumber}/>
    );
};

export default App;