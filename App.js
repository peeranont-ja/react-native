/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppState,
  Modal
}
from "react-native";

import * as firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD-A1Hsm0vxe1tlv9s8YH9LR-7hTEtHQXs",
  authDomain: "awesomeproject-9b4d2.firebaseapp.com",
  databaseURL: "https://awesomeproject-9b4d2.firebaseio.com",
  projectId: "awesomeproject-9b4d2",
  storageBucket: "awesomeproject-9b4d2.appspot.com",
  messagingSenderId: "154244221488"
};
firebase.initializeApp(config);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

console.ignoredYellowBox = ['Remote debugger'];


export default class App extends Component{

  constructor(props) {
    super(props);
    this.database = firebase.database();
    this.writeDB();
    this.readDB();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  writeDB() {
    firebase.database().ref('notes/1').set({
      text: 'Hello Text!'
    });
    firebase.database().ref('notes/2/3/4').set(55);
    firebase.database().ref('notes/2/3').set({
      4: 55
    });

    firebase.database().ref('notes/3').set("WTF");
    firebase.database().ref('notes/5').set([1, 2, 3, 4, 5]);
  }

  readDB() {
    firebase.database().ref('notes').once('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
