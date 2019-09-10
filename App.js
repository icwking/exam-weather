import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
      <View style={styles.blueView} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  blueView: {
    flex : 3,
    backgroundColor: "blue"
  }
});
