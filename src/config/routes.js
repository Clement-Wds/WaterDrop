import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import styled from 'styled-components';
import Home from '../screens/home';
import History from '../screens/history';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

export default Routes;
