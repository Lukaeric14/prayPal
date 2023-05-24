import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const ScrollContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ScrollContainer;
