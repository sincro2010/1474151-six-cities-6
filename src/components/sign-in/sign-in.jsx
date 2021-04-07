import React, {useRef} from 'react';
import Header from "../header/header";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logIn} from '../../store/api-actions';
import {AuthorizationStatus, AppRoute} from '../../common/const';
import {Redirect} from 'react-router-dom';

const SignIn = (props) => {
  const {onSubmit, authorizationStatus} = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handelSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={loginRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={passwordRef} />
              </div>
              <button className="header__login" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(logIn(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
