import React from 'react';
import styled from 'styled-components/native';
import FrequencyPicker from '../components/FrequencyPicker';

const Home = () => {
  return (
    <Container>
      <Title>
        Bienvenue sur WaterDrop, l'application qui pensera toujours à votre
        santé !
      </Title>
      <FrequencyPicker />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export default Home;
