import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function App() {
  const {width, height} = useWindowDimensions()

  return (
    <View style={[styles.container, {width, height}]}>
      <Text style={styles.text}>{JSON.stringify({width, height}, null, 3)}</Text>
      <Text>The yellow View should have the same dimensions as the window.  After resizing the window the view width and height will update</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 16,
  },
});
