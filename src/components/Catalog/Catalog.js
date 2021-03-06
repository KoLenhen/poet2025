import React from 'react';
import './Catalog.css';
import Header from '../Header/Header';
import categories from "./categories.json";
import Category from "../Category/Category";

function Catalog() {
  const category = categories.map(item => <Category key={item.id} name={item.name} poems = {item.poems} />)
  return (
    <div className="section">
      <Header title="Каталог" />
      <div className="catalog">
        {category}
      </div>
    </div>
  );
}

export default Catalog;