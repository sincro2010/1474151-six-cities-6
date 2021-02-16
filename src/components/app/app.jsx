import React from 'react';
import PropTypes from "prop-types";
import Header from '../header/header';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {propertiesNumber} = props;
  const {placeData} = props;

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header/>
        <MainPage propertiesNumber={propertiesNumber} places={placeData}/>
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  propertiesNumber: PropTypes.number.isRequired,
  placeData: PropTypes.arrayOf(
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
