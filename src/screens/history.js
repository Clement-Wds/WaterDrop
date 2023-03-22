import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
      const getHistory = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const items = await AsyncStorage.multiGet(keys);
          setHistory(items);
        } catch (error) {
          console.log(error);
        }
      };
      getHistory();
    }, []);

    const renderHistoryItem = ({item}) => (
        <HistoryItem>{item}</HistoryItem>
    );

    return (
        <Container>
          {history.length === 0 ? (
            <NoHistoryText>Aucune donnée d'historique trouvée</NoHistoryText>
          ) : (
            <FlatList
              data={history}
              renderItem={renderHistoryItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </Container>
    );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const NoHistoryText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

const HistoryItem = styled.Text`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export default History;