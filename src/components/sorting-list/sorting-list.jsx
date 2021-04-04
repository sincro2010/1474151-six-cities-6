import React, {useState} from 'react';
import {SortingTypes} from '../../common/const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const SortingList = (props) => {

  const {activeSorting, onSortingClick} = props;

  const [openedSorting, setOpenedSorting] = useState(false);

  const handleSortingClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    onSortingClick(evt.target.innerText);
    setOpenedSorting(false);
  };

  return (
    <form className="places__sorting" action="#" method="get" data-testid="places-sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortingClick} data-testid="places-sorting-type">
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openedSorting &&
      <ul className="places__options places__options--custom places__options--opened" data-testid="places-options">
        {Object.values(SortingTypes).map((sortingType, id) => (
          <li className={`places__option ${sortingType === activeSorting && `places__option--active`}`}
            key={sortingType + id}
            tabIndex={0}
            onClick={handleSortingChange}>{sortingType}</li>
        ))}
      </ul>}
    </form>
  );
};

const mapStateToProps = ({PLACES}) => ({
  activeSorting: PLACES.activeSorting,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingClick(selectedSorting) {
    dispatch(ActionCreator.changeSorting(selectedSorting));
  },
});

SortingList.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortingClick: PropTypes.func.isRequired
};

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);