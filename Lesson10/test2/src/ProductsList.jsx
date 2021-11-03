import React from 'react';

const ProductsList = ({ cartItem, total }) => (
  <div className="products">
    <ul className="products__list">
      {cartItem.map(({ id, name, price }) => (
        <li key={id} className="products__list-item">
          <span className="products__item-name">{name}</span>
          <span className="products__item-price">{price}</span>
        </li>
      ))}
    </ul>
    <div className="products__total">{`Total: $${total}`}</div>
  </div>
);

export default ProductsList;
