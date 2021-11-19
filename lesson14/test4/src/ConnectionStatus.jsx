import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleStatus = e => {
      console.log(e);
      setStatus(!status);
    };

    window.addEventListener('offline', handleStatus);
    window.addEventListener('online', handleStatus);

    // return {
    //   window.addEventListener('offline', handleStatus);
    //   window.addEventListener('online', handleStatus);
    // }
  });

  return (
    <>
      {status && <div className="status">online</div>}
      {!status && <div className="status status_offline">offline</div>}
    </>
  );
};

export default ConnectionStatus;
