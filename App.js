import React, {useState} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Movie DB </Text>
      <TextInput
        style={styles.searchbox}
        value={state.s}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },

  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 40
  }
});
