import React from 'react';
import placesPropTypes from '../../common/prop-types.js';
import FavoritePlace from './favorite-place.jsx';

const FavoritesCity = (props) => {
 const {offers} = props;
 return (
      <li className="favorites__locations-items">
         <div className="favorites__locations locations locations--current">
           <div className="locations__item">
             <a className="locations__item-link" href="#">
               <span>{props.city}</span>
             </a>
           </div>
         </div>
         <div className="favorites__places">
          {offers.map((place) => (
            <FavoritePlace 
             key={place.id}
             place={place}
            />
          ))}
         </div>
       </li>
 );
};

FavoritesCity.propTypes = {
 offers: placesPropTypes
}

export default FavoritesCity;
