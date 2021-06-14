import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Parse from "parse/react-native.js";
import FarmItem from '../components/FarmItem'
import AddItemBox from '../components/AddItemBox';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [farms, setFarms] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [input, setInput] = useState('');

  // use useNavigation hook
  const navigation = useNavigation();

  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await Parse.User.currentAsync();
      if (currentUser !== null) {
          // update active user and get his agwa farms
          setActiveUser(currentUser);
      }
    }
    getCurrentUser();
  }, []);

  useEffect(() => {
    if(activeUser) {
      readFarms();
    }
  }, [activeUser]);

  const readFarms = async function () {
    // read parse objects and filter by user id
    const parseQuery = new Parse.Query('Farm');
    parseQuery.equalTo("userId", activeUser);
    try {
      let farms = await parseQuery.find();
      console.log(farms);
      // set results to state variable
      setFarms(farms);
      return true;
    } catch (error) {
      // handle error exception
      Alert.alert('Error!', error.message);
      return false;
    };
  };

  const createFarm = async function () {
    if(activeUser) {
      const newFarmName = input;
      // create a new Farm parse object instance
      let Farm = new Parse.Object('Farm');
      Farm.set('name', newFarmName);
      Farm.set('userId', activeUser);
      // save farm on the server
      try {
        await Farm.save();
        // success
        Alert.alert('Success!', 'Farm created!');
        // update farms list
        readFarms();
        return true;
      } catch (error) {
        // handle error exception
        Alert.alert('Error!', error.message);
        return false;
      };
    }
  };

  const handleCreateFarm = function () {
    createFarm();
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Your Agwa Farms</Text>
      
      {farms.length > 0 && <ScrollView>
        {farms.map(farm => (
          <TouchableOpacity key={farm.id} onPress={() => {navigation.navigate('Farm', {farmId: farm.id})}} >
            <FarmItem name={farm.get('name')} />
          </TouchableOpacity>
        ))}
      </ScrollView>}

      <View style={styles.addBoxWrapper}>
        <AddItemBox 
          placeholder="New Agwa Farm . . ."
          inputText={input}
          onInputChange={text => setInput(text)}
          onCreateFarm={handleCreateFarm}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1
  },
  homeTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20
  },
});