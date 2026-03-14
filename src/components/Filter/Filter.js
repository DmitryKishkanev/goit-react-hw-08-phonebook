import { useDispatch, useSelector } from 'react-redux';
import { FilterTextField } from 'components/Filter/Filter.styled';
import { setFilter, selectFilter } from '../../redux/phonebook';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterTextField
      label="Find contacts by name"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
