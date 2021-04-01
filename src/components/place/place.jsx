import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {placePropTypes} from '../../common/prop-types.js';
import {getNumberOfStars, getProperty} from '../../common/utils.js';
import {PlaceSettings} from '../../common/const';


const Place = (props) => {
  const {place, placeName, setActivePlace, unsetActivePlace} = props;
  const {
    id,
    isPremium,
    isFavorite,
    previewImage,
    price,
    rating,
    title,
    type
  } = place;

  const mouseOver = () => setActivePlace(place.id);
  const mouseOut = () => unsetActivePlace();

  return (
    <article className={`${PlaceSettings[placeName].article} place-card ${mouseOver && `place-card--active`}`} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${PlaceSettings[placeName].image.imageClass} place-card__image-wrapper`}>
        <Link to={getProperty(id)}>
          <img className="place-card__image" src={previewImage} width={`${PlaceSettings[placeName].image.width}`} height={`${PlaceSettings[placeName].image.height}`} alt="Place image"/>
        </Link>
      </div>
      <div className={`${PlaceSettings[placeName].info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getNumberOfStars(rating)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getProperty(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Place.propTypes = {
  place: placePropTypes,
  placeName: PropTypes.string.isRequired,
  setActivePlace: PropTypes.func.isRequired,
  unsetActivePlace: PropTypes.func.isRequired
};

export default Place;
