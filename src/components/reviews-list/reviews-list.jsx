import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {reviewsPropTypes} from '../../common/prop-types.js';
import {sortingDate} from '../../common/utils';

const ReviewsList = (props) => {
  const {reviews} = props;

  let reviewsSorted = [];
  if (reviews.length > 0) {
    reviewsSorted = sortingDate(reviews).slice(0, 10);
  }

  return (
    <ul className="reviews__list">
      {reviewsSorted.map((review, index) => (
        <ReviewsItem
          key = {review + index}
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
