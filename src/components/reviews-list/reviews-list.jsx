import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {reviewsPropTypes} from '../../common/prop-types.js';

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewsItem
          key = {index}
          review = {review}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsPropTypes
};

export default ReviewsList;
