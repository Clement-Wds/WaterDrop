import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const Notification = () => {
  useEffect(() => {
    PushNotification.localNotification({
      title: "WaterDrop - Bienvenue",
      message: "N'oubliez pas de boire de l'eau régulièrement !",
    });
  }, []);

  return null;
};

export default Notification;
