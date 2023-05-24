import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Page1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 1 Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Page1Screen;
