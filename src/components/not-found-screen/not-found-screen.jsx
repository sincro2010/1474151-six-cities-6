import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';

const NotFoundScreen = () => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
};

export default NotFoundScreen;

