import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {connect} from "react-redux";
import {sendRoomReview} from '../../store/api-actions';
import {placesPropTypes, reviewsPropTypes} from '../../common/prop-types.js';
import {REVIEW_MIN_SYMBOLS, REVIEW_MAX_SYMBOLS, Status} from '../../common/const';

const ReviewForm = (props) => {
  const {id, onSubmitReview, statusReviewSending} = props;
  const [commentForm, setCommentForm] = useState({
    rating: null,
    comment: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitReview(
        id,
        commentForm
    );

    setCommentForm({
      ...commentForm,
      rating: null,
      comment: ``
    });
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleFieldChange}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={commentForm.comment} onChange={handleFieldChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={
          (commentForm.comment.length < REVIEW_MIN_SYMBOLS || commentForm.comment.length > REVIEW_MAX_SYMBOLS || !commentForm.rating)
        }>Submit</button>
        {statusReviewSending === Status.ERROR && <div style={{color: `red`}}><span>Review sending error!</span></div>}
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  reviews: reviewsPropTypes,
  places: placesPropTypes,
  onSubmitReview: PropTypes.func.isRequired,
  id: PropTypes.number,
  statusReviewSending: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  statusReviewSending: DATA.statusReviewSending,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(id, reviewData) {
    dispatch(sendRoomReview(id, reviewData));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
