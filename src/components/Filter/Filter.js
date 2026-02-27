import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel } from 'components/Filter/Filter.styled';
import { setFilter, selectFilter } from '../../redux/phonebook';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      <span>Find contacts by name </span>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};

export default Filter;
