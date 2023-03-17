import React from 'react';
import styled from 'styled-components/native';
import Notifee from "@notifee/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import FrequencyPicker from '../components/FrequencyPicker';


const Home = () => {

  const handlePress = async () => {
    const channelId = await Notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    
    await Notifee.displayNotification({
      title: 'WaterDrop - Félicitations',
      body: "Vous avez bu de l'eau et votre corps vous remercie !",
      android: {
        channelId,
      },
    });

    // Stockage de l'horodatage du clic
    const timestamp = new Date().getTime().toString();
    await AsyncStorage.setItem(timestamp, 'vous avez bu à cette heure');
  };

  return (
    <Container>
      <Title>
        Bienvenue sur WaterDrop, l'application qui pensera toujours à votre
        santé !
      </Title>
      <Button onPress={handlePress}>
        <ButtonText>J'ai bu de l'eau</ButtonText>
      </Button>
      <Button onPress={() => navigation.navigate('History')}>
        <ButtonText>Voir l'historique</ButtonText>
      </Button>
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

const Button = styled.TouchableOpacity`
  background-color: #007AFF;
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export default Home;
