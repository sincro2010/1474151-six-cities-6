import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {placesPropTypes, reviewsPropTypes, placePropTypes} from '../../common/prop-types.js';
import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import {MAX_PROPERTY_IMAGES, AuthorizationStatus} from '../../common/const';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import {getNumberOfStars, getPluralaze} from '../../common/utils.js';
import {fetchRoomReviews, fetchNearOffers, fetchRoom} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';


const Room = (props) => {
  const {
    reviews,
    nearOffers,
    onRoomDataRender,
    areReviewsLoaded,
    areNearOffersLoaded,
    isPropertyLoaded,
    place,
    activeCity,
    placeId,
    authorizationStatus
  } = props;

  useEffect(() => {
    onRoomDataRender(placeId);
  }, [placeId]);
  if (!areReviewsLoaded || !areNearOffersLoaded || !isPropertyLoaded) {
    return <LoadingScreen />;
  }

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type
  } = place;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_PROPERTY_IMAGES).map((image, ind) => {
                return (
                  <div key={`${image}-${ind}`} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (<div className="property__mark">
                <span>Premium</span>
              </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && `property__bookmark-button--active`} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getNumberOfStars(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedroom{getPluralaze(Number(bedrooms))}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adult{getPluralaze(maxAdults)}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, ind) => (
                    <li key={`${good}-${ind}`} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                {
                  (reviews.length > 0) &&
                  <ReviewsList reviews={reviews} />
                }
                {
                  authorizationStatus === AuthorizationStatus.AUTH &&
                  <ReviewForm id={placeId} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map"><Map offers={[...nearOffers, place]} activeCity={activeCity} /></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceList offers={nearOffers} placeName="NEAR"/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({PLACES, DATA, USER}) => ({
  activeCity: PLACES.activeCity,
  activePlaceId: PLACES.activePlace,
  place: DATA.place,
  isPropertyLoaded: DATA.isPropertyLoaded,
  reviews: DATA.reviews,
  areReviewsLoaded: DATA.areReviewsLoaded,
  nearOffers: DATA.nearOffers,
  areNearOffersLoaded: DATA.areNearOffersLoaded,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onRoomDataRender(id) {
    dispatch(fetchRoomReviews(id));
    dispatch(fetchNearOffers(id));
    dispatch(fetchRoom(id));
  },
});

Room.propTypes = {
  reviews: reviewsPropTypes,
  nearOffers: placesPropTypes,
  place: placePropTypes,
  placeId: PropTypes.number,
  activeCity: PropTypes.string.isRequired,
  areReviewsLoaded: PropTypes.bool.isRequired,
  onRoomDataRender: PropTypes.func.isRequired,
  areNearOffersLoaded: PropTypes.bool.isRequired,
  isPropertyLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
