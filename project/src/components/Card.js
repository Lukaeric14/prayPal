import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Card = ({ text }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 73,
    height: 73,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default Card;