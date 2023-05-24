import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollContainer from '../components/ScrollContainer';
import Card from '../components/Card';

const HomeScreen = () => {

  const cards = [
    { id: 1, text: 'Card 1' },
    { id: 2, text: 'Card 2' },
    { id: 3, text: 'Card 3' },
    { id: 4, text: 'Card 4' },
    { id: 5, text: 'Card 5' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Prayers</Text>
      <ScrollContainer>
      {cards.map((card) => (
        <Card key={card.id} text={card.text} />
      ))}
    </ScrollContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

export default HomeScreen;
