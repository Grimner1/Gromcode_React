import React, { useState } from 'react';
import Dimensions from './Dimansions';

const Demo = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div>
        <button className="btn" onClick={() => setIsVisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setIsVisible(false)}>
          Hide
        </button>
        {isVisible && <Dimensions />}
        {/* <Dimensions /> */}
      </div>
    </div>
  );
};

export default Demo;
