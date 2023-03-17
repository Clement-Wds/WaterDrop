import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import HomeScreen from './src/screens/home';

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </Container>
  );
};

export default App;