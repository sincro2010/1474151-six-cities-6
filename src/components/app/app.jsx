import React from 'react';
import {placesPropTypes, reviewsPropTypes} from '../../common/prop-types.js';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import MainPage from '../main-page/main-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../common/const';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact
          path={AppRoute.OFFER}
          render={(routeProps) => {
            const placeId = +routeProps.match.params.id;
            return <Room placeId={placeId}/>;
          }}
        >
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.ERROR}
          render={() => <NotFoundScreen />}
        >
        </Route>
        <Route
          render={() => <NotFoundScreen />}
        >
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
