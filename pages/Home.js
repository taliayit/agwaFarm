import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert, StyleSheet } from 'react-native';
import Parse from "parse/react-native.js";

export default function Home() {
  const [farms, setFarms] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await Parse.User.currentAsync();
      if (currentUser !== null) {
          // update active user and get his agwa farms
          setActiveUser(currentUser);
          readFarms();
      }
    }
    getCurrentUser();
  }, []);

  const readFarms = async function () {
    // read parse objects
    const parseQuery = new Parse.Query('Farm');
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
      const newFarmName = `Agwa Farm ${farms.length + 1}`;
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
  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Your Agwa Farms</Text>
      <Text onPress={createFarm}>add</Text>
      {farms.length > 0 && <ScrollView>
        {farms.map(farm => (
            <Text key={farm.id}>{farm.id}</Text>
        ))}
      </ScrollView>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  homeTitle: {
    fontWeight: "bold",
    fontSize: 30
  },
});