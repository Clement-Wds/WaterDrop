import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import HomeScreen from './src/screens/home';
import Notifee, { EventType } from '@notifee/react-native';

//Notifee.init();

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default App;