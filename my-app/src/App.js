import React from 'react';

function ButtonComponent() {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '20px',
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          margin: '5px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        Кнопка 1
      </button>
      <button
        style={{
          padding: '10px 20px',
          margin: '5px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          backgroundColor: 'gray',
          color: 'white',
        }}
      >
        Кнопка 2
      </button>
    </div>
  );
}

export default ButtonComponent;