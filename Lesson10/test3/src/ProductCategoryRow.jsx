// import React, { Component } from 'react';
import React from 'react';

const ProductCategoryRow = category => {
  console.log(category);
  console.log(111);
  //   const category = this.props.category;
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

// class ProductCategoryRow extends Component {
//   render() {
//     console.log(this.props.category);
//     console.log(111);
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">{category}</th>
//       </tr>
//     );
//   }
// }

export default ProductCategoryRow;
