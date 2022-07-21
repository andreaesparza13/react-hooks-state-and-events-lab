import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategory(e) {
    setSelectedCategory(selectedCategory => e.target.value);
  }

  const handleFilter = items.filter(item => {
    if (selectedCategory === "All") {
      return true;
    }
    return selectedCategory === item.category
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {handleFilter.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
