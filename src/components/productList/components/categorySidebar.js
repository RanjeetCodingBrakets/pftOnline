import React, { useState } from 'react';
import products from './productMockData';
import images from '../../../constants/images';
import { IoIosArrowDown } from "react-icons/io";

// Mapping of main categories to subcategories
const mainCategories = {
  'All Products': ['Spices', 'Spices & Tea', 'Sauces', 'Dal', 'Pulp', 'Dairy Valley', 'Patak', 'Rice', 'Thai', 'Mehl / Atta', 'Konserven', 'Pasta'],
  'Food Products': ['Spices', 'Spices & Tea', 'Sauces', 'Dal', 'Pulp', 'Dairy Valley', 'Patak', 'Rice', 'Thai', 'Mehl / Atta'],
  'Non-Food Products': ['Konserven', 'Pasta'] // Add non-food categories as needed
};

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
  Category1: images.option14,
  Category2: images.option15,
  Category3: images.option16,
};

// Calculate product count for each category
const categoryCounts = Object.values(mainCategories).flat().reduce((acc, category) => {
  acc[category] = products.filter(product => product.category === category).length;
  return acc;
}, {});

const CategorySidebar = ({ onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMainCategory, setSelectedMainCategory] = useState('All Products');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMainCategoryChange = (mainCategory) => {
    setSelectedMainCategory(mainCategory);
    setIsOpen(false); // Close dropdown when main category is selected
  };

  return (
    <div className="category-sidebar position-relative">
      <ul className="sidebar-top">
        <li onClick={toggleDropdown} className="dropdown-header">
          <span className="icon">
            <img src={categoryIcons['All']} alt="All icon" />
          </span>
          <span className="category-name">{selectedMainCategory}</span>
          <IoIosArrowDown />
        </li>
      </ul>
      {isOpen && (
        <ul className="dropdown-options position-absolute side-drop-option">
          {Object.keys(mainCategories).map((mainCategory, index) => (
            <li key={index} onClick={() => handleMainCategoryChange(mainCategory)}>
            <span className="icon">
            <img src={categoryIcons['All']} alt="All icon" />
            </span>
              <span className="category-name">{mainCategory}</span>
            </li>
          ))}
        </ul>
      )}
      <ul className="product-categories">
        {mainCategories[selectedMainCategory].map((category, index) => (
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
