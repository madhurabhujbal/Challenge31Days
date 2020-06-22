import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
