import React from 'react';
import PropTypes from "prop-types";
import MainPage from '../main-page/main-page';

//import placeData from '../../mock/places.js';

const App = (props) => {
    const {propertiesNumber} = props;
    const {placeData} = props;

    return  (
        <MainPage propertiesNumber={propertiesNumber} places={placeData}/>
    );
};

MainPage.propTypes = {
    propertiesNumber: PropTypes.number.isRequired,
    places: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number,
            isPremium: PropTypes.bool
        })
    ).isRequired
  };

export default App;