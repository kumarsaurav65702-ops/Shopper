import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category
  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className="category-banner" />

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
