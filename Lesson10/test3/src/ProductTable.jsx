import React, { Component } from 'react';
// import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

// const ProductTable = ({ products }) => {
//   console.log(products);
//   console.log(11111111111111);

//   const rows = [];
//   let lastCategory = null;

//   products.forEach(product => {
//     if (product.category !== lastCategory) {
//       rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//     }
//     rows.push(<ProductRow product={product} key={product.name} />);
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// };

class ProductTable extends Component {
  render() {
    console.log(this.props.products);
    console.log(11111111111111);

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
