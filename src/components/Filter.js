import React from 'react';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <input
      className="inputFilter"
      type="text"
      name="name"
      value={filter}
      onChange={onChangeFilter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    />
  );
};

export default Filter;
