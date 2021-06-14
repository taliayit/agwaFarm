import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  Parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize('Z2GjdTOFqHoydCPICvNH6kannQnF2WTwh3KjdPvx','N9sQIz454ccnF39FHURYy3C5GVzGIp6bYK7fpPAw');

  return (
    <View style={styles.container}>
      <Login/>
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
