import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  const onFilter = (input) => {
    if (input.name === '') {
      setProducts(jsonData)
    }
    setProducts((products) => [
      ...products.filter(
        (product) => product.name.toLowerCase().includes(input.name.toLowerCase())
      )
    ])
  };

  const handleCheck = () => {
    setProducts((products) => [
      ...products.filter((product) => product.inStock),
    ]);
  }

  return (
    <div className="App">
      <h1>IronStore</h1>
      <SearchBar onSearch={onFilter}/>
      <div className='checkBox'>
        <input type="checkbox" onChange={handleCheck} />
        <label>Only show products in stock</label>
      </div>
      <ProductTable data={products}/>
    </div>
  );

}

export default ProductPage;