import React from 'react';

function ButtonComponent() {
  // Переменные для CSS-свойств
  const containerPadding = '20px';
  const containerBorder = '1px solid #ccc';
  const containerBorderRadius = '5px';
  const containerMarginBottom = '20px';

  const buttonPadding = '10px 20px';
  const buttonMargin = '5px';
  const buttonBorder = 'none';
  const buttonBorderRadius = '5px';
  const buttonCursor = 'pointer';

  const primaryButtonBackgroundColor = 'blue';
  const primaryButtonColor = 'white';

  const secondaryButtonBackgroundColor = 'gray';
  const secondaryButtonColor = 'white';

  return (
    <div
      style={{
        padding: containerPadding,
        border: containerBorder,
        borderRadius: containerBorderRadius,
        marginBottom: containerMarginBottom,
      }}
    >
      <button
        style={{
          padding: buttonPadding,
          margin: buttonMargin,
          border: buttonBorder,
          borderRadius: buttonBorderRadius,
          cursor: buttonCursor,
          backgroundColor: primaryButtonBackgroundColor,
          color: primaryButtonColor,
        }}
      >
        Кнопка 1
      </button>
      <button
        style={{
          padding: buttonPadding,
          margin: buttonMargin,
          border: buttonBorder,
          borderRadius: buttonBorderRadius,
          cursor: buttonCursor,
          backgroundColor: secondaryButtonBackgroundColor,
          color: secondaryButtonColor,
        }}
      >
        Кнопка 2
      </button>
    </div>
  );
}

export default ButtonComponent;