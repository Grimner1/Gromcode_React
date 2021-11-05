import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Expand extends Component {
  render() {
    const { isShow, children, onClick, title } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onClick}>
            {isShow ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
            {/* <FontAwesomeIcon icon={faChevronUp} />
            <FontAwesomeIcon icon={faChevronDown} /> */}
          </button>
        </div>
        <div className="expand__content">{isShow && children}</div>
      </div>
    );
  }
}

export default Expand;
