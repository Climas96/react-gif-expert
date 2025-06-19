import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    // console.log(event.target.value);
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    const newValue = inputValue.trim();
    if (newValue.length <= 0) return;

    // setcategories((categories) => [inputValue, ...categories]);

    onNewCategory(newValue);
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
