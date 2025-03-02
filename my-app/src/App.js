import React from 'react';
import styled from 'styled-components';

// Создание стилизованных компонентов
const Container = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function ButtonComponent() {
  return (
    <Container>
      <Button primary>Кнопка 1</Button>
      <Button>Кнопка 2</Button>
    </Container>
  );
}

export default ButtonComponent;