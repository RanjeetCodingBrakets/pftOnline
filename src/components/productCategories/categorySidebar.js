import React, { useState } from 'react';
import products from './product';
import images from '../../constants/images';

// Mapping of category to its icon
const categoryIcons = {
  All: images.option1,
  Spices: images.option2,
  'Spices & Tea': images.option3,
  Sauces: images.option4,
  Dal: images.option5,
  Pulp: images.option6,
  'Dairy Valley': images.option7,
  Patak: images.option8,
  Rice: images.option9,
  Thai: images.option10,
  'Mehl / Atta': images.option11,
  Konserven: images.option12,
  Pasta: images.option13,
};

const categories = [
  'All', 'Spices', 'Spices & Tea', 'Sauces', 'Dal', 'Pulp', 
  'Dairy Valley', 'Patak', 'Rice', 'Thai', 'Mehl / Atta', 
  'Konserven', 'Pasta'
];

// Calculate product count for each category
const categoryCounts = categories.reduce((acc, category) => {
  acc[category] = products.filter(product => product.category === category).length;
  return acc;
}, {});

const CategorySidebar = ({ onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-sidebar ">
      <ul>
        <li onClick={toggleDropdown} className="dropdown-header sidebar-top">
          <span className="icon">
            <img src={categoryIcons['All']} alt="All icon" />
          </span>
          <span className="category-name">All</span>
          <span className="category-count">
            
          </span>
        </li>
        {isOpen && categories.slice(1).map((category, index) => (
          <li key={index} onClick={() => onCategoryChange(category)}>
            <span className="icon">
              <img src={categoryIcons[category]} alt={`${category} icon`} />
            </span>
            <span className="category-name">{category}</span>
            <span className="category-count">
              {categoryCounts[category] || 0}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
