import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    console.log(this.props.category);
    console.log(111);
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
