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
        Combien de rappels souhaitez-vous recevoir par jour pour boire de l'eau
        ?
      </Text>
      <TextInput
        value={numReminders}
        onChangeText={handleNumRemindersChange}
        keyboardType="numeric"
        placeholder="Nombre de rappels"
      />
      <StyledPicker
        selectedValue={frequencyUnit}
        onValueChange={value => setFrequencyUnit(value)}>
        <StyledPicker.Item label="Heures" value="hour" />
        <StyledPicker.Item label="Minutes" value="minute" />
      </StyledPicker>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledPicker = styled(Picker)`
  width: 200px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
`;

export default FrequencyPicker;
