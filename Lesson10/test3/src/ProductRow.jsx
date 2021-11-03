// import React, { Component } from 'react';
import React from 'react';

const ProductRow = ({ products }) => {
  console.log(products);
  console.log(111);

  const name = products.stocked ? (
    products.name
  ) : (
    <span style={{ color: 'red' }}>{products.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{products.price}</td>
    </tr>
  );
};

// class ProductRow extends Component {
//   render() {
//     console.log(this.props.product);

//     const product = this.props.product;
//     const name = product.stocked ? (
//       product.name
//     ) : (
//       <span style={{ color: 'red' }}>{product.name}</span>
//     );

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

export default ProductRow;
