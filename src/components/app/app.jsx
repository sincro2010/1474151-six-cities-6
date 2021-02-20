import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import MainPage from '../main-page/main-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (props) => {
  const {propertiesNumber} = props;
  const {offersData} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage propertiesNumber={propertiesNumber} offers={offersData} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/offer/:id?">
          <Room />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  propertiesNumber: PropTypes.number.isRequired,
  offersData: PropTypes.arrayOf(
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
