import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    cartItem: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render() {
    const total = this.state.cartItem.reduce((acc, item) => acc + item.price, 0);
    const count = this.state.cartItem.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />

        <ProductsList cartItem={this.state.cartItem} total={total} />
      </div>
    );
  }
}

export default ShoppingCart;
