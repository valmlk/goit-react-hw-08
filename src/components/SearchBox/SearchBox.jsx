import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filterState = useSelector(state => state.filter.name);

  return (
    <div className={css.box}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.filter}
        id={id}
        type="text"
        value={filterState}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
