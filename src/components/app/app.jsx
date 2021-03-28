import React from 'react';
import {placesPropTypes, reviewsPropTypes} from '../../common/prop-types.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import MainPage from '../main-page/main-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
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
  offersData: placesPropTypes,
  reviewsData: reviewsPropTypes
};

export default App;
