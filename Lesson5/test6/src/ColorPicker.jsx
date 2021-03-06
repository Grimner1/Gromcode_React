import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
    };
  }

  // showTextColor = e => {
  //   // console.log(e.target.dataset.color);
  //   this.setState({
  //     colorName: (this.state.colorName = e.target.dataset.color),
  //   });
  // };

  hideTextColor = () => {
    this.setState({
      colorName: (this.state.colorName = ''),
    });
  };

  setTitle = color => {
    this.setState({
      colorName: (this.state.colorName = color),
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            // data-color="Coral"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseOut={() => this.hideTextColor()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            // data-color="Auqa"
            onMouseEnter={() => this.setTitle('Aqua')}
            onMouseOut={() => this.hideTextColor()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            // data-color="Bisque"
            onMouseEnter={() => this.setTitle('Bisque')}
            onMouseOut={() => this.hideTextColor()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
