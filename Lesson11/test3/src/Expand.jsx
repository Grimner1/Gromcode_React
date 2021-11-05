import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isShowExpand: false,
  };

  onClick = () => {
    this.setState({
      isShowExpand: !this.state.isShowExpand,
    });
  };

  render() {
    const { children, title } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.onClick}>
            {this.state.isShowExpand ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </button>
        </div>
        <div className="expand__content">{this.state.isShowExpand && children}</div>
      </div>
    );
  }
}

export default Expand;
