import React from 'react';
import PropTypes from "prop-types";
import Header from '../header/header';
import MainPage from '../main-page/main-page';

const App = (props) => {
    const {propertiesNumber} = props;
    const {placeData} = props;

    return  (
        <React.Fragment>
            <Header/>
            <MainPage propertiesNumber={propertiesNumber} places={placeData}/>
        </React.Fragment>
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