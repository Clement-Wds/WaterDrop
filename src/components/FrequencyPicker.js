import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FrequencyPicker = () => {
  const [numReminders, setNumReminders] = useState('');
  const [frequencyUnit, setFrequencyUnit] = useState('hour');

  const handleNumRemindersChange = value => {
    setNumReminders(value.replace(/[^0-9]/g, ''));
  };

  return (
    <Container>
      <Text>
        Combien de rappels souhaitez-vous recevoir par jour pour boire de l'eau ?
      </Text>
      <TextInput
        value={numReminders}
        onChangeText={handleNumRemindersChange}
        keyboardType="numeric"
        placeholder="Nombre de rappels"
      />
      <Picker
        selectedValue={frequencyUnit}
        onValueChange={value => setFrequencyUnit(value)}>
        <Picker.Item label="Heures" value="hour" />
        <Picker.Item label="Minutes" value="minute" />
      </Picker>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default FrequencyPicker;
