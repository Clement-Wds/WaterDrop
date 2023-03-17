import React, {useEffect} from 'react';
import { StatusBar,TouchableOpacity  } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Menu } from 'lucide-react-native';

import Home from './src/screens/home';
import History from './src/screens/history';

const App = () => {

  const HomeScreen = ({navigation}) => {
    return (
      <Container>
        <Home />
      </Container>
    )
  }

  const HistoryScreen = ({navigation}) => {
    return (
      <Container>
        <History />
      </Container>
    )
  }

  const headerOptions = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#0080FF',
      shadowColor: 'transparent',
      elevation: 0,
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Menu name="menu" size={30} color="#FFF" style={{marginLeft: 15}} />
      </TouchableOpacity>
    ),
  });

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WaterDrop - Bienvenue" component={HomeScreen} options={headerOptions} />
        <Stack.Screen name="WaterDrop - Votre historique" component={HistoryScreen} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default App;