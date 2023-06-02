import React from 'react';

function Refresh({ reFetch }) {
  return (
    <>
    <button type="button" className="btn refresh-btn" onClick={reFetch}>Refresh</button>
    </>
  );
}

export default Refresh;
