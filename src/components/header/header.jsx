import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from "../../store/api-actions";
import {AuthorizationStatus} from '../../common/const';

const Header = (props) => {
  const {authorizationStatus, authorizationInfo, onLogoutClick} = props;

  const handelUserLogout = () => {
    onLogoutClick();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={`/`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <>
                    <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{authorizationInfo.email}</span>
                    </Link>
                    <button className="button" onClick={handelUserLogout}><p>Logout</p></button>

                  </>
                  : <Link className="header__login" to={`/login`}>Sign in</Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authorizationInfo: state.authorizationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logOut());
  },
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
