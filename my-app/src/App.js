import React from 'react';
import styled from 'styled-components';

// Создание стилизованных компонентов
const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid black;
`;

const DIVB = styled(DIVA)`
  background-color: green;
  border-width: 3px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

function Block1() {
  return (
    <Container>
      <DIVA />
      <DIVB />
      <DIVA />
    </Container>
  );
}

export default Block1;