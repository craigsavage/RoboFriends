import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{
        overflowY: 'scroll',
        border: '8px solid #324282',
        height: '750px'
      }}>
      { props.children }
    </div>
  );
}

export default Scroll;
