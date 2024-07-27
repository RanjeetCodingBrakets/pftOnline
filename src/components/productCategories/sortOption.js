import React from 'react';

const SortOptions = ({ onSortChange }) => (
  <div className="sort-options">
    <button onClick={() => onSortChange('price')}>Sort by Price</button>
    <button onClick={() => onSortChange('name')}>Sort by Name</button>
    <button onClick={() => onSortChange('bestseller')}>Sort by Best Seller</button>
    <button onClick={() => onSortChange('newarrival')}>Sort by New Arrival</button>
  </div>
);

export default SortOptions;
