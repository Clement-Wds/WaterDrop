import React from 'react';
import styled from 'styled-components/native';
import FrequencyPicker from '../components/FrequencyPicker';
import Notifee from "@notifee/react-native";

const Home = () => {

  const handlePress = async () => {
    const channelId = await Notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    
    await Notifee.displayNotification({
      title: 'WaterDrop - Notification',
      body: "N'oubliez pas de boire de l'eau régulièrement !",
      android: {
        channelId,
      },
    });
  };

  return (
    <Container>
      <Title>
        Bienvenue sur WaterDrop, l'application qui pensera toujours à votre
        santé !
      </Title>
      <Button onPress={handlePress}>
        <ButtonText>Afficher une notification</ButtonText>
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
