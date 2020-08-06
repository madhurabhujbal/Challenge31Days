import React, {useState} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';

export default function App() {
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  });

  const search = () => {
    axios(apiUrl + "&s=" + state.s)
    .then(( {data} ) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results}
      })
    })
  }

  const openPopup = id => {
    axios(apiUrl + "&i=" + id)
    .then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return{...prevState, selected: result}
      });
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Movie DB </Text>
      <TextInput
        style={styles.searchbox}
        onChangeText={text => setState(prevState => {
          return {...prevState, s:text}
        })}
        onSubmitEditing={search}
        value={state.s}
      />

      <ScrollView style={styles.results}>
        {state.results.map(result => (
          <TouchableHighlight key={result.imdbID} onPress={() => openPopup(result.imdbID)}>
            <View style={styles.result}>
              <Image
                source={{ uri: result.Poster }}
                style={{
                  width: '100%',
                  height: 300
                }}
                resizeMode="cover"
              />
              <Text style={styles.heading}>{result.Title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={false}
        visible={(typeof state.selected.Title != "undefined")}
      >
        <View style={styles.popup}>
              <Text style={styles.poptitle}>{state.selected.Title}</Text>
              <Text style={{ color:'#FFF', marginBottom: 20}}> Rating: {state.selected.imdbRating} </Text>
              <Text style={{color:'#FFF'}}> {state.selected.Plot} </Text>
        </View>

        <TouchableHighlight
          onPress={() => setState(prevState => {
            return{...prevState, selected: {}}
          })}
        >
          <View style={styles.popupBelow}>
            <Text style={styles.closeBtn}> Close </Text>
          </View>
        </TouchableHighlight>
      </Modal>
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
  },

  results: {
    flex: 1
  },

  result: {
    flex: 1,
    width: '100%',
    marginBottom: 20
  },

  heading: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565'
  },

  popup: {
    padding: 20,
    backgroundColor: '#223343',
    height: 500

  },

  popupBelow: {
    backgroundColor: '#223343',
    height: 90
  },

  poptitle: {
    fontSize: 24,
    fontWeight:'700',
    marginBottom: 5,
    color: '#FFF'
  },

  closeBtn: {
    padding: 20,
    fontSize: 20,
    borderRadius: 18,
    backgroundColor: '#2848C4',
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center'
  }
});
