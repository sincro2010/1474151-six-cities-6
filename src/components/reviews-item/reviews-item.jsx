import React from 'react';
import {reviewPropTypes} from '../../common/prop-types.js';
import {getNumberOfStars} from '../../common/utils.js';

const ReviewsItem = (props) => {
  const {review} = props;

  const {
    comment,
    rating,
    date,
    user: {avatarUrl, name},
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getNumberOfStars(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{new Date(date).toLocaleDateString(`en-US`, {second: `2-digit`, minute: `2-digit`, hour: `2-digit`, day: `numeric`, month: `long`, year: `numeric`})}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewPropTypes,
};

export default ReviewsItem;
