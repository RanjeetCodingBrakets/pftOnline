import React from "react";
import { useState } from "react";
import Categoryheader from "./components/categoryheader";
import CategorySidebar from "./components/categorySidebar";
import ProductGrid from "./components/productgrid";
import products from "./components/productMockData";
import images from "../../constants/images";
import "./productListing.css";

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  // Sorting logic based on sortOption
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price") return a.price - b.price;
    if (sortOption === "name") return a.name.localeCompare(b.name);
    // Add other sorting options here
    return 0;
  });
  return (
    <div className="prod-categry">
      <div className="container">
        <div className="row">
          <div className="col">
            <Categoryheader />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-40">
            <CategorySidebar onCategoryChange={handleCategoryChange} />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <ProductGrid products={sortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
